package test;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class Result {

    /*
     * Complete the 'lonelyinteger' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY a as parameter.
     */

    public static int lonelyinteger(List<Integer> a) {
    // Write your code here
    	int unique = 0;
    	int count = 0;
    	int frecuency = 0;
    	
    	while(!a.isEmpty()) {
    		unique = a.get(count);
    		frecuency = Collections.frequency(a, unique);
    		if(frecuency == 1) {
    			break;
    		}
    		
    		count++;
    		a.remove(new Integer(unique));
    	}
    	
    	return unique;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
    
        List<Integer> a = new ArrayList<>();
        a.add(0);
        a.add(0);
        a.add(1);
        a.add(2);
        a.add(1);
      

        int result = Result.lonelyinteger(a);

        System.out.println(result);
        
    }
}
