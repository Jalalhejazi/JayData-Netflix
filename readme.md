#Metro style Netflix Browser using JayData
The initial commit is code by Jeremy Foster, that is covered in detail in [this blog][1].

You need to have Windows 8 and Visual studio 2012 RC up and running in order to work with.


## Modifications:
1. Adding Odata [`$select=ShortName,BoxArt`][3] to reduce amount of OData traffic
2. Added [required files][4] to work with JayData
3. Replaced `WinJS.xhr` call by strong typed (yeap, Intellisense support!) [Netflix.context][5]



[1]: http://codefoster.com/post/2012/06/13/netflixstage1.aspx
[2]: http://www.javdata.org
[3]: https://github.com/RainerAtSpirit/JayData-Netflix/commit/859a271e66468489774a215a7e55afe3c582ebf1#diff-2
[4]: https://github.com/RainerAtSpirit/JayData-Netflix/commit/0f0283e4966752bb4686e74a020b4ea5b53f030b#diff-2
[5]: https://github.com/RainerAtSpirit/JayData-Netflix/commit/0f58dd77d50481fdde1d1b4dee555c3e8e5c197f#diff-0