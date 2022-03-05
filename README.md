# Kindle books csv

Output a CSV file for your purchased Kindle books list.

In this project, you must use "Kindle for PC" or "Kindle for Mac".

# Usage

First of all, please install packages.

```
git clone ...
yarn
```

Then, execute a script.

```
/bin/bash run.sh {xmlpath} {charset}

# ex.
/bin/bash run.sh /mnt/c/Users/ktanoooo/AppData/Local/Amazon/Kindle/Cache/KindleSyncMetadataCache.xml Shift_JIS
```

Please set `xmlpath` and `charset` in args.

## 1. `xmlpath`

Set the file path of the `KifndleSyncMetadataCache.xml` created by "Kindle for PC" or "Kindle for Mac".

### WindowsOS

Example.

WSL

- `/mnt/c/Users/{yourname}/AppData/Local/Amazon/Kindle/Cache/KindleSyncMetadataCache.xml`

### MacOS

Example.

- `$HOME/Library/Application Support/Kindle/Cache/KindleSyncMetadataCache.xml`
- `$HOME/Library/Containers/com.amazon.Kindle/Data/Library/Application Support/Kindle/Cache/KindleSyncMetadataCache.xml`

As you can see, you can check like the following the images.

|                              Select preferences                               |                           Check the Content Folder                            |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
| ![mac1.png](https://github.com/ktanoooo/kindle_csv/blob/main/public/mac1.png) | ![mac2.png](https://github.com/ktanoooo/kindle_csv/blob/main/public/mac2.png) |

## 2. `charset`

Set charset supported by the iconv-lite. Please choose from [here](https://gist.github.com/ktanoooo/54cb81d199560a006b61a2508aa0f5fb)

Example: utf8, Shift_JIS

# Output

The csv file is created in `./output/kindle-**.csv`
