figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.loadAllPagesAsync();

figma.ui.onmessage = pluginMessage => {
        
    const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post") as ComponentSetNode;
    const defaultVariant = postComponentSet.defaultVariant as ComponentNode;
    const defaultDark = figma.root.findOne(node => node.type == "COMPONENT" && node.name == "Image=none, Dark mode=true") as ComponentNode;

    if (pluginMessage.darkModeState){
        defaultDark.createInstance();
    } else {
        defaultVariant.createInstance();
    }

};