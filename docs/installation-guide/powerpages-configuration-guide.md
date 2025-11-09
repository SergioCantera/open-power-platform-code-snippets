---
sidebar_position: 2
---

# Power Pages

## Prerequisites

For using some of the Power Pages Components, you would need adding an script at the end of the page where you are including your component.

- **Flowbite CDN:** In your web page (or web template) file add the following script tag just before the end of the body:

```html
<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
```

This allows you to use the data attributes from the Power Page component examples (inherited from Flowbite) and will make them interactive automatically without needing to write custom JavaScript and you can just copy-paste them from these docs.

## Configuring the Components

**1. Copy the code from component**
To use the Power Pages Components, firstly you need to copy the code for the component you want.

```html
<div class="floatingfilled-container">
  <input
    type="text"
    id="floating_filled"
    class="floatingfilled-input"
    placeholder=" "
  />
  <label for="floating_filled" class="floatingfilled-label"
    >{ { textLabel } }</label
  >
</div>
<style>
  .floatingfilled-container {
    position: relative;
  }
  .floatingfilled-input {
    display: block;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    padding-bottom: 0.625rem;
    padding-top: 1.25rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-width: 0;
    border-bottom-width: 2px;
    border-color: #d1d5db;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #111827;
    background-color: #f3f4f6;
    appearance: none;
  }
  .floatingfilled-input:focus {
    outline-style: none;
    box-shadow: var(--tw-ring-inset) 0 0 0 calc(
        0px + var(--tw-ring-offset-width)
      )
      var(--tw-ring-color);
    border-color: #2563eb;
  }
  .floatingfilled-container input:focus {
    border-radius: 0;
  }
  .floatingfilled-label {
    position: absolute;
    top: 1rem;
    z-index: 10;
    left: 0.625rem;
    transition: top 0.3s, font-size 0.3s, transform 0.3s;
    transform-origin: 0;
  }
  .floatingfilled-input:focus ~ .floatingfilled-label,
  .floatingfilled-input:not(:placeholder-shown) ~ .floatingfilled-label {
    top: 0.75rem;
    font-size: 0.75rem;
    transform: translateY(-1rem) scale(0.75);
  }
  .floatingfilled-input:focus ~ .floatingfilled-label {
    color: #2563eb;
  }
</style>

{ % manifest % } { "type": "Functional", "displayName": "Floating Filled Label",
"description": "Floating ", "tables": [], "params": [ { "id": "textLabel",
"displayName": "Text Label", "description": "Text for label" } ] } { %
endmanifest % }
```

**2. Create a Web Template file and Paste the code**
After that, you must create a Web Template and paste the code in the Origin text field.

**3. Use the Component**
Then you can use it in your site from Power Pages Studio or with a Liquid statement. Here's an example of how to use a Floating Outlined Label Input component:

## Additional information

- **Support:** If you encounter any issues or have questions, feel free to open an issue on our [GitHub repository](https://github.com/SergioCantera/open-power-platform-code-snippets)

## Next Steps

Now that you know how start adding them into your project. Check out the Power Apps Component Guide for detailed information on how to use each component
