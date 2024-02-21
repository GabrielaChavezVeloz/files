import java.io.*;
import java.util.*;

public class Solution {
    
    public static void main(String[] args) throws IOException {
                
        Scanner in = new Scanner(System.in);
        int[][] board = new int[9][9];
        int n = in.nextInt();
        
        //System.out.println(n);
        
        for(int i=0;i<n;i++) {
            for(int j=0;j<9;j++) {
                for(int k=0;k<9;k++) {
                    board[j][k] = in.nextInt();
                }
            }
            //sudoku_solve(board);
            if(sudoku_solve(board)){
                print(board);
            }
        }
        
        in.close();
    }
        
    static boolean sudoku_solve(int [][] board){
         
        int row=0; 
        int column = 0;
         
        boolean empty_cell = false; 
        
        for (int i = 0; i < 9; i++) { 
            for (int j = 0; j < 9; j++){ 
                if (board[i][j] == 0){ 
                    row = i; 
                    column = j; 
                    empty_cell = true; 
                    break; 
                } 
            } 
            if (empty_cell){ 
                break; 
            } 
        } 
    
        if (!empty_cell){ 
            return true; 
        } 
    
        // implementing Backtracking Algorithm
        for (int k = 1; k <= 9; k++){ 
            if (validateBoard(board, row, column, k)){ 
                board[row][column] = k; 
                if (sudoku_solve(board)){ 
                    return true; 
                } else{ 
                    board[row][column] = 0;  
                } 
            } 
        } 
        return false;
    }
    
    public static boolean validateBoard(int[][] board, int row, int col, int num){ 
        for (int i = 0; i < 9; i++){  
            if (board[row][i] == num){ 
                return false; 
            } 
        } 
        
        for (int i = 0; i < 9; i++){   
            if (board[i][col] == num){ 
                return false; 
            } 
        } 
    
        int subBoardRow = row - row % 3; 
        int subBoardCol = col - col % 3; 
    
        for (int i = subBoardRow; i < subBoardRow + 3; i++){ 
            for (int j = subBoardCol; j < subBoardCol + 3; j++){ 
                if (board[i][j] == num){ 
                    return false; 
                } 
            } 
        }
        return true; 
    } 
    
    
    public static void print(int[][] board){  
        for (int i = 0; i < 9; i++){ 
            for (int j = 0; j < 9; j++){ 
                System.out.print(board[i][j]); 
                System.out.print(" "); 
            } 
            System.out.print("\n"); 
            if ((i + 1) % (int) Math.sqrt(9) == 0){ 
                System.out.print(""); 
            } 
        } 
    } 
    
    
}
