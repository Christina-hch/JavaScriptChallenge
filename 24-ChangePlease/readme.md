Change Please
You’re building an ATM and are tasked with determining how many different ways you can “break” a given amount of money into different bills.

Given an input amount of money inputMoney and a list of values coins representing the possible denominations of coins the ATM can give back, complete the function changeOptions(inputMoney, coins) so that it returns the number of different ways the ATM could give you change.

For example, changeOptions(5, [1, 2, 5, 10, 100]) should return 4. This is because there are 4 unique ways that the ATM can give change for 5:

1 + 1 + 1 + 1 + 1
1 + 1 + 1 + 2
1 + 2 + 2
5
You can assume inputMoney is positive and you can assume coins has at least one value.

This challenge was reported to have been asked at interviews with Google. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge.