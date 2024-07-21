figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.loadAllPagesAsync();

figma.ui.onmessage = pluginMessage => {
    const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post") as ComponentSetNode;
    const defaultVariant = postComponentSet.defaultVariant as ComponentNode;
    //const defaultDark = figma.root.findOne(node => node.type == "COMPONENT" && node.name == "Image=none, Dark mode=true") as ComponentNode;

    let selectedVariant;
    selectedVariant = "hello world";
    selectedVariant="This works";
    console.log(selectedVariant);

    if (pluginMessage.darkModeState) {
        switch(pluginMessage.imageVariant) {
            case "2":
                //create instance of dark mode, single image
                selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=single, Dark mode=true") as ComponentNode;
                selectedVariant.createInstance();
                break;
            case "3":
                //create instance of dark mode, carousel
                selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=carousel, Dark mode=true") as ComponentNode;
                selectedVariant.createInstance();
                break;
            default:
                // create instance of dark mode, no image
                selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=none, Dark mode=true") as ComponentNode;
                selectedVariant.createInstance();
                break;
        } 
    } else {
        switch(pluginMessage.imageVariant) {
            case "2":
                //create instance of light mode, single image
                selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=single, Dark mode=false") as ComponentNode;
                selectedVariant.createInstance();
                break;
            case "3":
                //create instance of light mode, carousel
                selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=carousel, Dark mode=false") as ComponentNode;
                selectedVariant.createInstance();
                break;
            default:
                selectedVariant = postComponentSet.defaultVariant as ComponentNode;
                selectedVariant.createInstance();    
                //defaultVariant.createInstance();
                //create instance of light mode, no image
                break;
        }
    }
    
};
