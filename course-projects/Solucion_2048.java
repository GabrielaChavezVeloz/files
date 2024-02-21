import java.io.*;
import java.util.*;


public class Solution {
    public static int count;
    public static int moves;

  public static String nextMove(int[][] board) {
              
   
    
    String move = null;
    
    int scoreUp = moveUp(board);
    int scoreDown = moveDown(board);
    int scoreLeft = moveLeft(board);
    int scoreRight = moveRight(board);
        
    
    if((scoreUp > scoreDown) && (scoreUp > scoreLeft) && (scoreUp > scoreRight)){
        move = "UP";
    }
    
    else if((scoreDown > scoreUp) && (scoreDown > scoreLeft) && (scoreDown > scoreRight)){
        move = "DOWN";
    }
    
    else if((scoreLeft > scoreUp) && (scoreLeft > scoreDown) && (scoreLeft > scoreRight)){
        move = "LEFT";
    }
    
    else if((scoreRight > scoreUp) && (scoreRight > scoreDown) && (scoreRight > scoreLeft)){
        move = "RIGHT";
    }    

    else if(scoreRight == scoreUp && scoreRight == scoreLeft && scoreRight == scoreDown){
        move = "UP";
    }

    else{
        move = "DOWN";
    }
    
    
    return move;
  }

  public static int getScore(int[][] board){
    int score = 0;
    int emptyCells = 0;
    int maxValue = 0;

    for(int i=0; i<4; i++){
        for(int j=0; j<4; j++){
            score += board[i][j];

            if(board[i][j] > maxValue){
                maxValue = board[i][j];
            }

            
        }
    }

    if((board[0][0] == maxValue) ||  (board[0][3] == maxValue) || (board[3][0] == maxValue) || (board[3][3] == maxValue)){
        score += 10;
    } 
  

    return score;
  }
  
  public static int moveUp(int[][] board){
    
    int score = 0;

    
    for(int j=0; j<4; j++){
        int[] column = getColumn(board, j);
        int[] mergedColumn = mergeTiles(column);
        setColumn(board, j, mergedColumn);
        score += count*30;
        score += moves*10;
    }
    
    score += getScore(board);  
      
    return score;
  }
  
  public static int moveDown(int[][] board){
    int score = 0;
      
    
    for(int j=0; j<4; j++){
        int[] column = getColumn(board, j);
        reverseArray(column);
        int[] mergedColumn = mergeTiles(column);
        reverseArray(mergedColumn);
        setColumn(board, j, mergedColumn);
        score += count*30;
        score += moves*10;
    }

    score += getScore(board);  
      
    return score;
  }
  
  public static int moveLeft(int[][] board){
    
    int score = 0;

    for(int i=0; i<4; i++){
        int[] row = board[i];
        int[] mergedRow = mergeTiles(row);
        board[i] = mergedRow;
        score += count*30;
        score += moves*10;
    }

    score += getScore(board);
      
    return score;
  }
  
  public static int moveRight(int[][] board){
    
    int score = 0;


    for(int i=0; i<4; i++){
        int[] row = board[i];
        reverseArray(row);
        int[] mergedRow = mergeTiles(row);
        reverseArray(mergedRow);
        board[i] = mergedRow;
        score += count*30;
        score += moves*10;
    }


    score += getScore(board);
      
      
    return score;
  }


  public static int[] getColumn(int[][]board, int j){
    int[] column = new int[4];

    for(int i=0; i<4; i++){
        column[i] = board[i][j];
    }
    return column;
  }

  public static void setColumn(int[][] board, int j, int[] column){
    for(int i=0; i<4; i++){
        board[i][j] = column[i];
    }
  }

  public static int[] mergeTiles(int[] tiles){
    int[] mergedTiles = new int[4];
    int index = 0;
    count = 0;
    moves = 0;

    for(int i=0; i<4; i++){
        if(tiles[i] != 0){
            if(i>0 && tiles[i] == mergedTiles[index ==0 ? index : index -1]){
                mergedTiles[index - 1] *= 2;
                count++;
            } else {
                mergedTiles[index] = tiles[i];
                index++;
                moves++;
            }
        }
    }

    return mergedTiles;
  }

  public static void reverseArray(int[] array){
    for(int i=0; i<array.length/2; i++){
        int temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
  }


  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int[][] board = new int[4][4];
    
    for (int i = 0; i < 4; i++)
      for (int j = 0; j < 4; j++)
          board[i][j] = in.nextInt();
    System.out.println(nextMove(board));
  }
}