figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.loadAllPagesAsync();

figma.ui.onmessage = pluginMessage => {
        
    const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post") as ComponentSetNode;
    const defaultVariant = postComponentSet.defaultVariant as ComponentNode;
    const defaultDark = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "Image=none, Dark mode=true") as ComponentNode;
    
    
    defaultVariant.createInstance();
    defaultDark.createInstance();

    console.log(postComponentSet);
    console.log(postComponentSet.children);
    console.log(postComponentSet.name);

    console.log(pluginMessage.name);
    console.log(pluginMessage.username);
    console.log(pluginMessage.description);
    console.log(pluginMessage.darkModeState);
    console.log(pluginMessage.imageVariant);
};