package com.firstmicroservice;

import java.io.*;
import java.util.*;


public class Solution {

  public static String nextMove(int[][] board) {
		  	
	/*
	int numero = (int) (Math.random() * 3 + 1);
	String mov[] = new String[4];
	mov[0] = "UP";
	mov[1] = "DOWN";
	mov[2] = "LEFT";
	mov[3] = "RIGHT";*/
	
	
	String move = null;
	
	int scoreUp = moveUp(board);
	int scoreDown = moveDown(board);
	int scoreLeft = moveLeft(board);
	int scoreRight = moveRight(board);
		
	
	if((scoreUp > scoreDown) && (scoreUp > scoreLeft) && (scoreUp > scoreRight)){
		move = "UP";
	}
	
	if((scoreDown > scoreUp) && (scoreDown > scoreLeft) && (scoreDown > scoreRight)){
		move = "DOWN";
	}
	
	if((scoreLeft > scoreUp) && (scoreLeft > scoreDown) && (scoreLeft > scoreRight)){
		move = "LEFT";
	}
	
	if((scoreRight > scoreUp) && (scoreRight > scoreDown) && (scoreRight > scoreLeft)){
		move = "RIGHT";
	}	
	
	
	return move;
  }
  
  public static int moveUp(int[][] board){
	
	int score = 0;

	int[][] newBoard = board.clone();

	for(int j=0; j<4; j++){
		int[] column = getColumn(newBoard, j);
		int[] mergedColumn = mergeTiles(column);
		setColumn(newBoard, j, mergedColumn);
	}
	  
	  
	for(int i=0; i<4; i++){
		for(int j=0; j<4; j++){
			score += newBoard[i][j];
		}
	}
	  
	  
	return score;
  }
  
  public static int moveDown(int[][] board){
	int score = 0;
	  
	int[][] newBoard = board.clone();

	for(int j=0; j<4; j++){
		int[] column = getColumn(newBoard, j);
		reverseArray(column);
		int[] mergedColumn = mergeTiles(column);
		reverseArray(mergedColumn);
		setColumn(newBoard, j, mergedColumn);
	}

	for(int i=0; i<4; i++){
		for(int j=0; j<4; j++){
			score += newBoard[i][j];
		}
	}
	  
	return score;
  }
  
  public static int moveLeft(int[][] board){
	
	int score = 0;

	int[][] newBoard = board.clone();

	for(int i=0; i<4; i++){
		int[] row = newBoard[i];
		int[] mergedRow = mergeTiles(row);
		newBoard[i] = mergedRow;
	}

	for(int i=0; i<4; i++){
		for(int j=0; j<4; j++){
			score += newBoard[i][j];
		}
	}
	  
	  
	return score;
  }
  
  public static int moveRight(int[][] board){
	
	int score = 0;

	int[][] newBoard = board.clone();

	for(int i=0; i<4; i++){
		int[] row = newBoard[i];
		reverseArray(row);
		int[] mergedRow = mergeTiles(row);
		reverseArray(mergedRow);
		newBoard[i] = mergedRow;
	}

	for(int i=0; i<4; i++){
		for(int j=0; j<4; j++){
			score += newBoard[i][j];
		}
	}
	  
	  
	return score;
  }


  public static int[] getColumn(int[][]newBoard, int j){
	int[] column = new int[4];

	for(int i=0; i<4; i++){
		column[i] = newBoard[i][j];
	}
	return column;
  }

  public static void setColumn(int[][] newBoard, int j, int[] column){
	for(int i=0; i<4; i++){
		newBoard[i][j] = column[i];
	}
  }

  public static int[] mergeTiles(int[] tiles){
	int[] mergedTiles = new int[4];
	int index = 0;

	for(int i=0; i<4; i++){
		if(tiles[i] != 0){
			if(i>0 && tiles[i] == mergedTiles[index-1]){
				mergedTiles[index - 1] *= 2;
			} else {
				mergedTiles[index] = tiles[i];
				index++;
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
    int[][] board =  {{0,2,0,0}, {0,0,0,2}, {0,0,0,0}, {0,0,0,0}};
    
    //for (int i = 0; i < 4; i++)
      //for (int j = 0; j < 4; j++)
      	//board[i][j] = in.nextInt();
    System.out.println(nextMove(board));

	in.close();
  }
}