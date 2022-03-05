# kindle csv

Output a CSV file for your purchased Kindle books list.
In this project, you must use Kindle for PC.

# Usage

First of all, please install packages.

```
git clone ...
yarn
```

Then, execute a script.

```
/bin/bash run.sh {xmlpath} {charset}
```

Please set `xmlpath` and `charset` in args.

`xmlpath`
Set `KindleSyncMetadataCache.xml` path created "Kindle for PC".

- WindowsOS WSL sample
  - /mnt/c/Users/{yourname}/AppData/Local/Amazon/Kindle/Cache/KindleSyncMetadataCache.xml
- MacOS sample
  - $HOME/Library/Containers/com.amazon.Kindle/Data/Library/Application Support/Kindle/Cache/KindleSyncMetadataCache.xml

`charset`

Set charset supported by the iconv-lite. Please choose from [here]("https://gist.github.com/ktanoooo/54cb81d199560a006b61a2508aa0f5fb")

Example: utf8, Shift_JIS

```
# ex.
/bin/bash run.sh /mnt/c/Users/ktanoooo/AppData/Local/Amazon/Kindle/Cache/KindleSyncMetadataCache.xml Shift_JIS
```

The csv file is created in `./output/kindle-**.csv`
