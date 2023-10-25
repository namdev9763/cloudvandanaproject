package cloudvandana;

public class PangramString {

	public static void main(String[] args) 
	{
		String s1="qwertyuioplkjhgfdsazxcvbnmmhdjfgk";
		boolean r=pangarm(s1.toLowerCase());
		if(r)
		{
			System.out.println("String is Panagaram");
		}
		else
		{
			System.out.println("String is Not Panagaram");
		}
	}
	private static boolean pangarm(String s1) 
	{
		boolean[] alphabet = new boolean[26];
		int totalLetters = 0;
		for(int i=0;i<s1.length();i++)
		{
			for (char c : s1.toCharArray())
			{
				if (Character.isLetter(c))
				{
					int index = c - 'a';
					if (!alphabet[index])
					{
						alphabet[index] = true;
						totalLetters++;
					}
				}
			}
		}
		if(totalLetters == 26)
			return true;
		else
			return false;
	}
}
