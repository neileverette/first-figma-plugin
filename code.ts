figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.loadAllPagesAsync();

figma.ui.onmessage = pluginMessage => {
        
    const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post") as ComponentSetNode;
    const defaultVariant = postComponentSet.defaultVariant as ComponentNode;
    const defaultDark = figma.root.findOne(node => node.type == "COMPONENT" && node.name == "Image=none, Dark mode=true") as ComponentNode;

    if (pluginMessage.darkModeState){
        switch(pluginMessage.imageVariant) {
            case "2" :
                //create instance of dark mode, single image
                break;
            case "3" :
                //create instance of dark mode, carousel
                break;
            default :
                defaultDark.createInstance();
                //create instance of dark mode, no image
                break;
        }
    } else {
        switch(pluginMessage.imageVariant) {
            case "2" :
                //create instance of dark mode, single image
                break;
            case "3" :
                //create instance of dark mode, carousel
                break;
            default :
                defaultVariant.createInstance();
                //create instance of dark mode, no image
                break;
        
    }

};