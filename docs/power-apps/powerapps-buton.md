---
sidebar_position: 1
---

# Button with icon

## Prerequisites

There is no special prerequisites to use these **Power Apps Code Snippets**:

## Configuring the Components

**1. Copy the code from component**
To use the Power Apps Components, firstly you need to copy the code for the component you want.

```yaml
- btnExample:
    Control: Button@0.0.45
    Properties:
      Appearance: ='ButtonCanvas.Appearance'.Outline
      FontColor: =If(App.ActiveScreen = Screen1,ColorValue("#0079c2"))
      Icon: ="Add"
      Text: ="Button Example"
      Width: =250
```

**2. Paste the code into your app**
You select the screen where you want to place your control and paste the code in the tree view.

**3. Use the compoenent**
Then your control is ready to be used (or modified as you want) in your Canvas App. Here's an example of how to use a Button control:

## Additional information

- **Support:** If you encounter any issues or have questions, feel free to open an issue on our [GitHub repository](https://github.com/SergioCantera/open-power-platform-code-snippets)

## Next Steps

Now that you know how start adding them into your project. Check out the Power Apps Component Guide for detailed information on how to use each component
