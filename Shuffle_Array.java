package cloudvandana;

import java.util.Random;

public class Shuffle_Array 
{

	public static void main(String[] args) 
	{
		int shuffleArray []= {1,2,3,4,5,6,7};
		array(shuffleArray);
		print(shuffleArray);
	}

	private static void print(int[] shuffleArray) 
	{
		for(int i=0;i<shuffleArray.length;i++)
		{
			System.out.print(shuffleArray[i]+" ");
		}
	}

	private static void array(int[] shuffleArray)
	{
		Random random=new Random();
		
		for(int i=shuffleArray.length-1;i>0;i--)
		{
			int j=random.nextInt(i+1);
			int temp=shuffleArray[i];
			shuffleArray[i]=shuffleArray[j];
			shuffleArray[j]=temp;
		}
		
	}

}
