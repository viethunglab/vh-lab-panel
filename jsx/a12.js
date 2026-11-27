// Application: C:\Program Files\Adobe\Adobe Photoshop CC 2019 (20.0.0)
// Date: 2021-11-25T13:31:42-08:00
// Actions file: C:\Users\NT Studio\Desktop\NT.atn
// Action set: NT

// jamEngine.jsxinc v4.4.4 (minified)
if(typeof jamEngine!=='object') {var jamEngine={};(function() {var that;jamEngine.meaningfulIds=false;jamEngine.parseFriendly=false;jamEngine.displayDialogs=DialogModes.ERROR;var conflictingStringIdStrs={"'Algn'":["align","alignment"],"'AntA'":["antiAlias","antiAliasedPICTAcquire"],"'BckL'":["backgroundLayer","backgroundLevel"],"'BlcG'":["blackGenerationType","blackGenerationCurve"],"'BlcL'":["blackLevel","blackLimit"],"'Blks'":["blacks","blocks"],"'BlrM'":["blurMethod","blurMore"],"'BrgC'":["brightnessEvent","brightnessContrast"],"'BrsD'":["brushDetail","brushesDefine"],"'Brsh'":["brush","brushes"],"'Clcl'":["calculation","calculations"],"'ClrP'":["colorPalette","coloredPencil"],"'Cnst'":["constant","constrain"],"'CntC'":["centerCropMarks","conteCrayon"],"'Cntr'":["center","contrast"],"'CrtD'":["createDroplet","createDuplicate"],"'CstP'":["customPalette","customPhosphors"],"'Cstm'":["custom","customPattern"],"'Drkn'":["darken","darkness"],"'Dstr'":["distort","distortion","distribute","distribution"],"'Dstt'":["desaturate","destWhiteMax"],"'FlIn'":["fileInfo","fillInverse"],"'Gd  '":["good","guide"],"'GnrP'":["generalPreferences","generalPrefs","preferencesClass"],"'GrSt'":["grainStippled","graySetup"],"'Grdn'":["gradientClassEvent","gridMinor"],"'Grn '":["grain","green"],"'Grns'":["graininess","greens"],"'HstP'":["historyPreferences","historyPrefs"],"'HstS'":["historyState","historyStateSourceType"],"'ImgP'":["imageCachePreferences","imagePoint"],"'In  '":["in","stampIn"],"'IntW'":["interfaceWhite","intersectWith"],"'Intr'":["interfaceIconFrameDimmed","interlace","interpolation","intersect"],"'JPEG'":["JPEG","JPEGFormat"],"'LghD'":["lightDirection","lightDirectional"],"'LghO'":["lightOmni","lightenOnly"],"'LghS'":["lightSource","lightSpot"],"'Lns '":["lens","lines"],"'Mgnt'":["magenta","magentas"],"'MrgL'":["mergeLayers","mergedLayers"],"'Mxm '":["maximum","maximumQuality"],"'NTSC'":["NTSC","NTSCColors"],"'NmbL'":["numberOfLayers","numberOfLevels"],"'PlgP'":["pluginPicker","pluginPrefs"],"'Pncl'":["pencilEraser","pencilWidth"],"'Pnt '":["paint","point"],"'Prsp'":["perspective","perspectiveIndex"],"'PrvM'":["previewMacThumbnail","previewMagenta"],"'Pstr'":["posterization","posterize"],"'RGBS'":["RGBSetup","RGBSetupSource"],"'Rds '":["radius","reds"],"'ScrD'":["scratchDisks","screenDot"],"'ShdI'":["shadingIntensity","shadowIntensity"],"'ShpC'":["shapeCurveType","shapingCurve"],"'ShrE'":["sharpenEdges","shearEd"],"'Shrp'":["sharpen","sharpness"],"'SplC'":["splitChannels","supplementalCategories"],"'Spot'":["spot","spotColor"],"'SprS'":["separationSetup","sprayedStrokes"],"'StrL'":["strokeLength","strokeLocation"],"'Strt'":["saturation","start"],"'TEXT'":["char","textType"],"'TIFF'":["TIFF","TIFFFormat"],"'TglO'":["toggleOptionsPalette","toggleOthers"],"'TrnG'":["transparencyGamutPreferences","transparencyGrid","transparencyGridSize"],"'TrnS'":["transferSpec","transparencyShape","transparencyStop"],"'Trns'":["transparency","transparent"],"'TxtC'":["textClickPoint","textureCoverage"],"'TxtF'":["textureFile","textureFill"],"'UsrM'":["userMaskEnabled","userMaskOptions"],"'c@#^'":["inherits","pInherits"],"'comp'":["comp","sInt64"],"'doub'":["floatType","IEEE64BitFloatingPoint","longFloat"],"'long'":["integer","longInteger","sInt32"],"'magn'":["magnitude","uInt32"],"'null'":["null","target"],"'shor'":["sInt16","sMInt","shortInteger"],"'sing'":["IEEE32BitFloatingPoint","sMFloat","shortFloat"]};jamEngine.getConflictingStringIdStrs=function(charIdStr) {return conflictingStringIdStrs[charIdStr]||null;};jamEngine.uniIdStrToId=function(uniIdStr) {var id=0;if(typeof uniIdStr==='string') {if((uniIdStr.length===(1+4+1))&&(uniIdStr.charAt(0)==="'")&&(uniIdStr.charAt(5)==="'")) {id=app.charIDToTypeID(uniIdStr.substring(1,5));} else {id=app.stringIDToTypeID(uniIdStr);}} return id;};var smallestHashValue=app.charIDToTypeID("    ");jamEngine.idToUniIdStrs=function(id) {var charIdStr="";var stringIdStr=app.typeIDToStringID(id);if(id>=smallestHashValue) {charIdStr="'"+app.typeIDToCharID(id)+"'";if(stringIdStr!=="") {if(charIdStr in conflictingStringIdStrs) {stringIdStr=conflictingStringIdStrs[charIdStr];}}} return[charIdStr,stringIdStr];};jamEngine.equivalentUniIdStrs=function(uniIdStr1,uniIdStr2) {return this.uniIdStrToId(uniIdStr1)===this.uniIdStrToId(uniIdStr2);};function putInReference(ref,containers) {if(containers.constructor===Array) {var count=containers.length;for(var i=0;i<count;i++) {var container=that.parseCompact(containers[i]);var desiredClassId=that.uniIdStrToId(container[0]);var typedValue=that.parseCompact(container[1]);var form=typedValue[0];var value=typedValue[1];switch(form) {case"<class>":ref.putClass(desiredClassId);break;case"<enumerated>":var enumerated=that.parseCompact(value);ref.putEnumerated(desiredClassId,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<identifier>":ref.putIdentifier(desiredClassId,value);break;case"<index>":ref.putIndex(desiredClassId,value);break;case"<name>":ref.putName(desiredClassId,value);break;case"<offset>":ref.putOffset(desiredClassId,value);break;case"<property>":ref.putProperty(desiredClassId,that.uniIdStrToId(value));break;default:throw new Error("[jamEngine putInReference] Unknown reference form: "+form);break;}}} else {throw new Error("[jamEngine putInReference] JavaScript array expected");}} function putInList(list,items) {if(items.constructor===Array) {var count=items.length;for(var i=0;i<count;i++) {var item=that.parseCompact(items[i]);var type=item[0];var value=item[1];switch(type) {case"<boolean>":list.putBoolean(value);break;case"<class>":list.putClass(that.uniIdStrToId(value));break;case"<data>":list.putData(value);break;case"<double>":list.putDouble(value);break;case"<enumerated>":var enumerated=that.parseCompact(value);list.putEnumerated(that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":list.putInteger(value);break;case"<largeInteger>":list.putLargeInteger(value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);list.putList(actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);list.putObject(that.uniIdStrToId(object[0]),actionDescriptor);} else {list.putClass(that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);list.putPath(fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);list.putReference(actionReference);break;case"<string>":list.putString(value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);list.putUnitDouble(that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInList] Unknown list type: "+type);break;}}} else {throw new Error("[jamEngine putInList] JavaScript array expected");}} function putInDescriptor(desc,members) {if(members.constructor===Object) {for(var key in members) {if(members.hasOwnProperty(key)) {var keyID=that.uniIdStrToId(key);var member=that.parseCompact(members[key]);var type=member[0];var value=member[1];switch(type) {case"<boolean>":desc.putBoolean(keyID,value);break;case"<class>":desc.putClass(keyID,that.uniIdStrToId(value));break;case"<data>":desc.putData(keyID,value);break;case"<double>":desc.putDouble(keyID,value);break;case"<enumerated>":var enumerated=that.parseCompact(value);desc.putEnumerated(keyID,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":desc.putInteger(keyID,value);break;case"<largeInteger>":desc.putLargeInteger(keyID,value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);desc.putList(keyID,actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);desc.putObject(keyID,that.uniIdStrToId(object[0]),actionDescriptor);} else {desc.putClass(keyID,that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);desc.putPath(keyID,fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);desc.putReference(keyID,actionReference);break;case"<string>":desc.putString(keyID,value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);desc.putUnitDouble(keyID,that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInDescriptor] Unknown descriptor type: "+type);break;}}}} else {throw new Error("[jamEngine putInDescriptor] JavaScript object expected");}} var contextRules={"'Algn'":{"<classKey>":{"bevelEmboss":"align","frameFX":"align","gradientFill":"align","gradientLayer":"align","patternFill":"align","patternLayer":"align"},"<event>":"align","<key>":"alignment"},"'AntA'":{"<class>":"antiAliasedPICTAcquire","<key>":"antiAlias"},"'BckL'":{"<class>":"backgroundLayer","<key>":"backgroundLevel"},"'BlcG'":{"<enumType>":"blackGenerationType","<key>":"blackGenerationCurve"},"'BlcL'":{"<classKey>":{"'GEfc'":"blackLevel","CMYKSetup":"blackLimit"},"<eventKey>":{"reticulation":"blackLevel"}},"'Blks'":{"<typeValue>":{"colors":"blacks","extrudeType":"blocks"}},"'BlrM'":{"<enumType>":"blurMethod","<event>":"blurMore","<key>":"blurMethod"},"'BrgC'":{"<class>":"brightnessContrast","<event>":"brightnessContrast"},"'BrsD'":{"<enumValue>":"brushesDefine","<key>":"brushDetail"},"'Brsh'":{"<class>":"brush","<key>":"brushes"},"'Clcl'":{"<class>":"calculation","<enumValue>":"calculations","<key>":"calculation"},"'ClrP'":{"<typeValue>":{"'GEft'":"coloredPencil"},"<enumType>":"colorPalette","<event>":"coloredPencil"},"'Cnst'":{"<classKey>":{"channelMatrix":"constant"},"<unknown>":"constrain"},"'CntC'":{"<typeValue>":{"'GEft'":"conteCrayon"},"<event>":"conteCrayon","<key>":"centerCropMarks"},"'Cntr'":{"<classKey>":{"'GEfc'":"contrast","brightnessContrast":"contrast","document":"center","polygon":"center","quadrilateral":"center"},"<eventKey>":{"adaptCorrect":"contrast","brightnessEvent":"contrast","grain":"contrast","halftoneScreen":"contrast","sumie":"contrast","tornEdges":"contrast","waterPaper":"contrast"},"<enumValue>":"center"},"'CrtD'":{"<enumValue>":"createDuplicate","<event>":"createDroplet"},"'CstP'":{"<class>":"customPhosphors","<key>":"customPalette"},"'Cstm'":{"<enumValue>":"customPattern","<event>":"custom","<key>":"custom"},"'Drkn'":{"<enumValue>":"darken","<key>":"darkness"},"'Dstr'":{"<classKey>":{"'GEfc'":"distortion"},"<eventKey>":{"glass":"distortion","addNoise":"distribution"},"<enumType>":"distribution","<enumValue>":"distort","<event>":"distribute"},"'Dstt'":{"<enumValue>":"desaturate","<event>":"desaturate","<key>":"destWhiteMax"},"'FlIn'":{"<typeValue>":{"fillColor":"fillInverse","menuItemType":"fileInfo"},"<class>":"fileInfo","<key>":"fileInfo"},"'Gd  '":{"<class>":"guide","<enumValue>":"good"},"'GnrP'":{"<class>":"preferencesClass","<enumValue>":"generalPreferences","<key>":"generalPrefs"},"'GrSt'":{"<class>":"graySetup","<enumValue>":"grainStippled","<key>":"graySetup"},"'Grdn'":{"<class>":"gradientClassEvent","<event>":"gradientClassEvent","<key>":"gridMinor"},"'Grn '":{"<typeValue>":{"'GEft'":"grain"},"<classKey>":{"'GEfc'":"grain","RGBColor":"green","blackAndWhite":"green","channelMatrix":"green","channelMixer":"green"},"<eventKey>":{"blackAndWhite":"green","channelMixer":"green","filmGrain":"grain"},"<enumValue>":"green","<event>":"grain"},"'Grns'":{"<enumValue>":"greens","<key>":"graininess"},"'HstP'":{"<enumValue>":"historyPreferences","<key>":"historyPrefs"},"'HstS'":{"<class>":"historyState","<enumType>":"historyStateSourceType"},"'ImgP'":{"<class>":"imagePoint","<enumValue>":"imageCachePreferences"},"'In  '":{"<enumValue>":"stampIn","<key>":"in"},"'IntW'":{"<event>":"intersectWith","<key>":"interfaceWhite"},"'Intr'":{"<typeValue>":{"shapeOperation":"intersect"},"<classKey>":{"GIFFormat":"interlace","SaveForWeb":"interlace","application":"interfaceIconFrameDimmed","computedBrush":"interpolation","dBrush":"interpolation","gradientClassEvent":"interpolation","photoshopEPSFormat":"interpolation","sampledBrush":"interpolation"},"<eventKey>":{"convertMode":"interpolation","imageSize":"interpolation","transform":"interpolation"},"<event>":"intersect"},"'JPEG'":{"<class>":"JPEGFormat","<enumValue>":"JPEG"},"'LghD'":{"<enumType>":"lightDirection","<enumValue>":"lightDirectional","<key>":"lightDirection"},"'LghO'":{"<typeValue>":{"diffuseMode":"lightenOnly","lightType":"lightOmni"}},"'LghS'":{"<class>":"lightSource","<enumValue>":"lightSpot","<key>":"lightSource"},"'Lns '":{"<enumType>":"lens","<enumValue>":"lines","<key>":"lens"},"'Mgnt'":{"<typeValue>":{"channel":"magenta","colors":"magentas","guideGridColor":"magenta"},"<key>":"magenta"},"'MrgL'":{"<enumValue>":"mergedLayers","<event>":"mergeLayers"},"'Mxm '":{"<enumValue>":"maximumQuality","<event>":"maximum","<key>":"maximum"},"'NTSC'":{"<enumValue>":"NTSC","<event>":"NTSCColors"},"'NmbL'":{"<classKey>":{"'GEfc'":"numberOfLevels","document":"numberOfLayers"},"<eventKey>":{"cutout":"numberOfLevels"}},"'PlgP'":{"<class>":"pluginPrefs","<enumValue>":"pluginPicker","<key>":"pluginPrefs"},"'Pncl'":{"<enumValue>":"pencilEraser","<key>":"pencilWidth"},"'Pnt '":{"<typeValue>":{"textType":"point"},"<class>":"point","<event>":"paint"},"'Prsp'":{"<enumValue>":"perspective","<key>":"perspectiveIndex"},"'PrvM'":{"<enumValue>":"previewMagenta","<key>":"previewMacThumbnail"},"'Pstr'":{"<class>":"posterize","<event>":"posterize","<key>":"posterization"},"'RGBS'":{"<enumType>":"RGBSetupSource","<key>":"RGBSetup"},"'Rds '":{"<enumValue>":"reds","<key>":"radius"},"'ScrD'":{"<enumValue>":"screenDot","<key>":"scratchDisks"},"'ShdI'":{"<classKey>":{"'GEfc'":"shadowIntensity"},"<eventKey>":{"watercolor":"shadowIntensity"},"<unknown>":"shadingIntensity"},"'ShpC'":{"<classKey>":{"application":"shapingCurve"},"<class>":"shapingCurve","<key>":"shapeCurveType"},"'ShrE'":{"<event>":"sharpenEdges","<key>":"shearEd"},"'Shrp'":{"<event>":"sharpen","<key>":"sharpness"},"'SplC'":{"<event>":"splitChannels","<key>":"supplementalCategories"},"'Spot'":{"<enumValue>":"spotColor","<key>":"spot"},"'SprS'":{"<typeValue>":{"'GEft'":"sprayedStrokes"},"<enumValue>":"separationSetup","<event>":"sprayedStrokes"},"'StrL'":{"<enumType>":"strokeLocation","<key>":"strokeLength"},"'Strt'":{"<classKey>":{"currentToolOptions":"saturation","fileNamingRules":"start","HSBColorClass":"saturation","hueSatAdjustment":"saturation","hueSatAdjustmentV2":"saturation","lineClass":"start","range":"start","vibrance":"saturation"},"<eventKey>":{"replaceColor":"saturation","variations":"saturation","vibrance":"saturation"},"<enumValue>":"saturation"},"'TEXT'":{"<enumType>":"textType","<key>":"textType"},"'TIFF'":{"<class>":"TIFFFormat","<enumValue>":"TIFF"},"'TglO'":{"<enumValue>":"toggleOptionsPalette","<key>":"toggleOthers"},"'TrnG'":{"<classKey>":{"application":"transparencyGrid","transparencyPrefs":"transparencyGridSize"},"<enumType>":"transparencyGridSize","<enumValue>":"transparencyGamutPreferences"},"'TrnS'":{"<classKey>":{"bevelEmboss":"transparencyShape","dropShadow":"transparencyShape","innerGlow":"transparencyShape","innerShadow":"transparencyShape","outerGlow":"transparencyShape"},"<class>":"transparencyStop","<unknown>":"transferSpec"},"'Trns'":{"<enumValue>":"transparent","<key>":"transparency"},"'TxtC'":{"<classKey>":{"'GEfc'":"textureCoverage","textLayer":"textClickPoint"},"<eventKey>":{"underpainting":"textureCoverage"}},"'TxtF'":{"<event>":"textureFill","<key>":"textureFile"},"'UsrM'":{"<enumType>":"userMaskOptions","<key>":"userMaskEnabled"},"'null'":{"<class>":"null","<enumValue>":"null","<event>":"null","<key>":"target"}};function getFromId(context,parentContext) {var uniIdStr;var kind=context[0];var id=context[1];if(id<smallestHashValue) {uniIdStr=app.typeIDToStringID(id);} else {uniIdStr="'"+app.typeIDToCharID(id)+"'";if(that.meaningfulIds) {if(uniIdStr in contextRules) {function resolveIdStr(candidates) {var idStr="";for(var parentString in candidates) {if(candidates.hasOwnProperty(parentString)) {if(parentContext[1]===that.uniIdStrToId(parentString)) {idStr=candidates[parentString];break;}}} return idStr;} var resolvedIdStr="";var rule=contextRules[uniIdStr];if(parentContext) {switch(kind) {case"<key>":if((parentContext[0]==="<class>")&&("<classKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<classKey>"]);} else if((parentContext[0]==="<event>")&&("<eventKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<eventKey>"]);} break;case"<enumValue>":if((parentContext[0]==="<enumType>")&&("<typeValue>"in rule)) {resolvedIdStr=resolveIdStr(rule["<typeValue>"]);} break;}} if(resolvedIdStr!=="") {uniIdStr=resolvedIdStr;} else if(kind in rule) {uniIdStr=rule[kind];}} else {var stringIDStr=app.typeIDToStringID(id);if(stringIDStr!=="") {uniIdStr=stringIDStr;}}}} return uniIdStr;} var incompatiblePlatformPath="";var getEventId=app.stringIDToTypeID("get");var targetKeyId=app.stringIDToTypeID("target");var propertyClassId=app.stringIDToTypeID("property");function getFromReference(ref) {var propertyId=0;var arr=[];do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(propertyId!==0) {var propertyCompact=that.buildCompact("<property>",getFromId(["<key>",propertyId],["<class>",desiredClassId]));arr.push(that.buildCompact(getFromId(["<class>",propertyClassId]),propertyCompact));propertyId=0;} var desiredCompact;var aFormID=ref.getForm();switch(aFormID) {case ReferenceFormType.CLASSTYPE:desiredCompact=that.buildCompact("<class>",null);break;case ReferenceFormType.ENUMERATED:var enumTypeContext=["<enumType>",ref.getEnumeratedType()];var enumValueContext=["<enumValue>",ref.getEnumeratedValue()];desiredCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case ReferenceFormType.IDENTIFIER:desiredCompact=that.buildCompact("<identifier>",ref.getIdentifier());break;case ReferenceFormType.INDEX:desiredCompact=that.buildCompact("<index>",ref.getIndex());break;case ReferenceFormType.NAME:desiredCompact=that.buildCompact("<name>",ref.getName());break;case ReferenceFormType.OFFSET:desiredCompact=that.buildCompact("<offset>",ref.getOffset());break;case ReferenceFormType.PROPERTY:if(desiredClassId===propertyClassId) {propertyId=ref.getProperty();} else {desiredCompact=that.buildCompact("<property>",getFromId(["<key>",ref.getProperty()],["<class>",desiredClassId]));} break;default:throw new Error("[jamEngine getFromReference] Unknown reference form type: "+aFormID);break;} if(desiredClassId!==propertyClassId) {arr.push(that.buildCompact(getFromId(["<class>",desiredClassId]),desiredCompact));} ref=ref.getContainer();} while(ref);return arr;} function getFromList(list) {var arr=[];var itemCount=list.count;for(var itemIndex=0;itemIndex<itemCount;itemIndex++) {var itemCompact;var typeID;try{typeID=list.getType(itemIndex);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:itemCompact=that.buildCompact("<boolean>",list.getBoolean(itemIndex));break;case DescValueType.CLASSTYPE:itemCompact=that.buildCompact("<class>",getFromId(["<class>",list.getClass(itemIndex)]));break;case DescValueType.DOUBLETYPE:itemCompact=that.buildCompact("<double>",list.getDouble(itemIndex));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",list.getEnumerationType(itemIndex)];var enumValueContext=["<enumValue>",list.getEnumerationValue(itemIndex)];itemCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:itemCompact=that.buildCompact("<integer>",list.getInteger(itemIndex));break;case DescValueType.LISTTYPE:itemCompact=that.buildCompact("<list>",getFromList(list.getList(itemIndex)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",list.getObjectType(itemIndex)];var objectValue=list.getObjectValue(itemIndex);itemCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=list.getPath(itemIndex);itemCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {itemCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:itemCompact=that.buildCompact("<reference>",getFromReference(list.getReference(itemIndex)));break;case DescValueType.STRINGTYPE:itemCompact=that.buildCompact("<string>",list.getString(itemIndex));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",list.getUnitDoubleType(itemIndex)];var doubleValue=list.getUnitDoubleValue(itemIndex);itemCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {itemCompact=that.buildCompact("<data>",list.getData(itemIndex));} else if(isLargeIntegerType) {itemCompact=that.buildCompact("<largeInteger>",list.getLargeInteger(itemIndex));} else {throw new Error("[jamEngine getFromList] Unknown descriptor value type: "+typeID);} break;} arr[itemIndex]=itemCompact;} return arr;} function getFromDescriptor(desc,parentContext) {if(desc) {var obj={};var keyCount;try{keyCount=desc.count;}catch(e){return null;} for(var keyIndex=0;keyIndex<keyCount;keyIndex++) {var keyID=desc.getKey(keyIndex);var keyString=getFromId(["<key>",keyID],parentContext);var keyCompact;var typeID;try{typeID=desc.getType(keyID);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:keyCompact=that.buildCompact("<boolean>",desc.getBoolean(keyID));break;case DescValueType.CLASSTYPE:keyCompact=that.buildCompact("<class>",getFromId(["<class>",desc.getClass(keyID)]));break;case DescValueType.DOUBLETYPE:keyCompact=that.buildCompact("<double>",desc.getDouble(keyID));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",desc.getEnumerationType(keyID)];var enumValueContext=["<enumValue>",desc.getEnumerationValue(keyID)];keyCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:keyCompact=that.buildCompact("<integer>",desc.getInteger(keyID));break;case DescValueType.LISTTYPE:keyCompact=that.buildCompact("<list>",getFromList(desc.getList(keyID)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",desc.getObjectType(keyID)];var objectValue=desc.getObjectValue(keyID);keyCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=desc.getPath(keyID);keyCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {keyCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:keyCompact=that.buildCompact("<reference>",getFromReference(desc.getReference(keyID)));break;case DescValueType.STRINGTYPE:keyCompact=that.buildCompact("<string>",desc.getString(keyID));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",desc.getUnitDoubleType(keyID)];var doubleValue=desc.getUnitDoubleValue(keyID);keyCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {keyCompact=that.buildCompact("<data>",desc.getData(keyID));} else if(isLargeIntegerType) {keyCompact=that.buildCompact("<largeInteger>",desc.getLargeInteger(keyID));} else {throw new Error("[jamEngine getFromDescriptor] Unknown descriptor value type: "+typeID);} break;} obj[keyString]=keyCompact;} return obj;} else {return null;}} jamEngine.jsonToActionDescriptor=function(descriptorObj) {that=this;var actionDescriptor;if(descriptorObj) {actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,descriptorObj);} return actionDescriptor;};jamEngine.jsonToActionReference=function(referenceArr) {that=this;var actionReference;if(referenceArr) {actionReference=new ActionReference();putInReference(actionReference,referenceArr);} return actionReference;};jamEngine.eventIdAndActionDescriptorToJson=function(eventId,actionDescriptor) {that=this;var eventIdContext=["<event>",eventId];return{"<event>":getFromId(eventIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,eventIdContext)};};jamEngine.classIdAndActionDescriptorToJson=function(classId,actionDescriptor) {that=this;var classIdContext=["<class>",classId];return{"<class>":getFromId(classIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,classIdContext)};};jamEngine.actionReferenceToJson=function(actionReference) {that=this;return getFromReference(actionReference);};function getReferenceClassId(ref) {classId=0;do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(desiredClassId!==propertyClassId) {classId=desiredClassId;break;} ref=ref.getContainer();} while(ref);return classId;} jamEngine.jsonPlay=function(eventUniIdStr,descriptorObj,displayDialogs) {var eventId=this.uniIdStrToId(eventUniIdStr);var desc=this.jsonToActionDescriptor(descriptorObj);var parentContext;if(eventId===getEventId) {var ref=desc.getReference(targetKeyId);parentContext=["<class>",getReferenceClassId(ref)];} else {parentContext=["<event>",eventId];} return getFromDescriptor(app.executeAction(eventId,desc,displayDialogs||this.displayDialogs),parentContext);};jamEngine.jsonGet=function(referenceArr) {var ref=this.jsonToActionReference(referenceArr);return getFromDescriptor(app.executeActionGet(ref),["<class>",getReferenceClassId(ref)]);};jamEngine.normalizeJsonItem=function(item,options) {function normalizeItem(item) {var explicit=that.parseCompact(item);var type=explicit[0];var value=explicit[1];var normalizedValue;switch(type) {case"<boolean>":case"<data>":case"<double>":case"<identifier>":case"<index>":case"<integer>":case"<largeInteger>":case"<name>":case"<offset>":case"<path>":case"<string>":normalizedValue=value;break;case"<class>":normalizedValue=value&&getFromId(["<class>",that.uniIdStrToId(value)]);break;case"<enumerated>":var enumerated=that.parseCompact(value);var enumTypeContext=["<enumType>",that.uniIdStrToId(enumerated[0])];var enumValueContext=["<enumValue>",that.uniIdStrToId(enumerated[1])];normalizedValue=that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext));break;case"<list>":normalizedValue=[];for(var i=0;i<value.length;i++) {normalizedValue.push(normalizeItem(value[i]));} break;case"<object>":var object=that.parseCompact(value);var objectClassContext=["<class>",that.uniIdStrToId(object[0])];var objectDescriptor=object[1];var normalizedDescriptor;if(objectDescriptor===null) {normalizedDescriptor=null;} else {normalizedDescriptor={};for(var key in objectDescriptor) {if(objectDescriptor.hasOwnProperty(key)) {var objectKeyContext=["<key>",that.uniIdStrToId(key)];normalizedDescriptor[getFromId(objectKeyContext,objectClassContext)]=normalizeItem(objectDescriptor[key]);}}} normalizedValue=that.buildCompact(getFromId(objectClassContext),normalizedDescriptor);break;case"<property>":normalizedValue=getFromId(["<key>",that.uniIdStrToId(value)]);break;case"<reference>":normalizedValue=[];for(var i=0;i<value.length;i++) {var container=that.parseCompact(value[i]);normalizedValue.push(that.buildCompact(getFromId(["<class>",that.uniIdStrToId(container[0])]),normalizeItem(container[1])));} break;case"<unitDouble>":var unitDouble=that.parseCompact(value);var unitTypeContext=["<unit>",that.uniIdStrToId(unitDouble[0])];normalizedValue=that.buildCompact(getFromId(unitTypeContext),unitDouble[1]);break;default:throw new Error("[jamEngine.normalizeJsonItem] Unknown item type: "+type);break;} return that.buildCompact(type,normalizedValue);} that=this;var saveMeaningfulIds=this.meaningfulIds;var saveParseFriendly=this.parseFriendly;if(options&&(options.constructor===Object)) {if(typeof options.meaningfulIds!=='undefined') {this.meaningfulIds=options.meaningfulIds;} if(typeof options.parseFriendly!=='undefined') {this.parseFriendly=options.parseFriendly;}} var normalizedItem=normalizeItem(item);this.meaningfulIds=saveMeaningfulIds;this.parseFriendly=saveParseFriendly;return normalizedItem;};function simplifyRef(ref) {var simplifiedRef=[];for(var i=0;i<ref.length;i++) {var element=ref[i];var simplifiedElement={};var desiredClass=element[0];var form=element[1][0];var value=element[1][1];switch(form) {case"<class>":case"<identifier>":case"<index>":case"<name>":case"<offset>":case"<property":simplifiedElement[desiredClass]=value;break;case"<enumerated>":simplifiedElement[desiredClass]=value[1];break;default:throw new Error("[jamEngine simplifyRef] Unexpected element form: "+form);break;} simplifiedRef.push(simplifiedElement);} return simplifiedRef;} function simplifyItem(item,hook) {var simplifiedItem;var type=item[0];var value=item[1];switch(type) {case"<boolean>":case"<class>":case"<data>":case"<double>":case"<integer>":case"<largeInteger>":case"<path>":case"<string>":simplifiedItem=value;break;case"<list>":simplifiedItem=simplifyList(value,hook);break;case"<enumerated>":case"<unitDouble>":simplifiedItem=value[1];break;case"<object>":simplifiedItem=simplifyDesc(value[1],hook);break;case"<reference>":simplifiedItem=simplifyRef(value);break;default:throw new Error("[jamEngine simplifyItem] Unexpected item type: "+type);break;} return simplifiedItem;} function simplifyList(list,hook) {var simplifiedList=[];for(var i=0;i<list.length;i++) {simplifiedList.push(simplifyItem(list[i],hook));} return simplifiedList;} function simplifyDesc(desc,hook) {var getDefaultValue=function(desc,key){return simplifyItem(desc[key],hook);};var simplifiedDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=undefined;if(typeof hook==='function') {value=hook(desc,key,getDefaultValue);} if(typeof value==='undefined') {value=simplifyItem(desc[key],hook);} simplifiedDesc[key]=value;}} return simplifiedDesc;} jamEngine.simplifyObject=function(object,hookFunction) {return simplifyDesc((this.normalizeJsonItem(object,{meaningfulIds:true,parseFriendly:true}))[1][1],hookFunction);};jamEngine.simplifyList=function(list,hookFunction) {return simplifyList((this.normalizeJsonItem(list,{meaningfulIds:true,parseFriendly:true}))[1],hookFunction);};jamEngine.parseCompact=function(compact) {var result=[];if(compact.constructor===Object) {var keys=[];for(var k in compact) {if(compact.hasOwnProperty(k)) {keys.push(k);}} if(keys.length===1) {result[0]=keys[0];result[1]=compact[keys[0]];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else if(compact.constructor===Array) {if(compact.length===2) {result[0]=compact[0];result[1]=compact[1];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else {throw new Error("[jamEngine.parseCompact] JavaScript object or array expected");} return result;};jamEngine.compactToExplicit=function(compact,typeKey,valueKey) {var explicit={};var typeValue=this.parseCompact(compact);explicit[typeKey||"<type>"]=typeValue[0];explicit[valueKey||"<value>"]=typeValue[1];return explicit;};jamEngine.buildCompact=function(type,value) {var compact;if(typeof type==='string') {if(this.parseFriendly) {compact=[type,value];} else {compact={};compact[type]=value;}} else {throw new Error("[jamEngine.buildCompact] String expected");} return compact;};jamEngine.explicitToCompact=function(explicit,typeKey,valueKey) {var compact;if(explicit.constructor===Object) {compact=this.buildCompact(explicit[typeKey||"<type>"],explicit[valueKey||"<value>"]);} else {throw new Error("[jamEngine.explicitToCompact] JavaScript object expected");} return compact;};for(var charIdStr in conflictingStringIdStrs) {if(conflictingStringIdStrs.hasOwnProperty(charIdStr)) {var stringIdStrs=conflictingStringIdStrs[charIdStr];for(var index=stringIdStrs.length-1;index>=0;index--) {var stringIdStr=stringIdStrs[index];if(!(app.charIDToTypeID(charIdStr.substring(1,5))===app.stringIDToTypeID(stringIdStr))) {stringIdStrs.splice(index,1);}} if(stringIdStrs.length<2) {delete conflictingStringIdStrs[charIdStr];}}} for(var charIdStr in contextRules) {if(contextRules.hasOwnProperty(charIdStr)) {if(charIdStr in conflictingStringIdStrs) {var rule=contextRules[charIdStr];for(var kind in rule) {if(rule.hasOwnProperty(kind)) {switch(kind) {case"<class>":case"<event>":case"<enumType>":case"<enumValue>":case"<key>":case"<unknown>":if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind]+"\" are not equivalent ID strings");} break;case"<classKey>":case"<eventKey>":case"<typeValue>":for(var parent in rule[kind]) {if(rule[kind].hasOwnProperty(parent)) {if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind][parent])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind][parent]+"\" are not equivalent ID strings");}}} break;}}}} else {delete contextRules[charIdStr];}}}}());}

jamEngine.meaningfulIds = false;
jamEngine.parseFriendly = false;

// Action “Màu Hàn 11”
try
{
	// Duplicate
	jamEngine.jsonPlay
	(
		"'Dplc'",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'Lyr '":
						{
							"<property>": "'Bckg'"
						}
					}
				]
			},
			"'Nm  '":
			{
				"<string>": "Background copy"
			},
			"'Vrsn'":
			{
				"<integer>": 5
			}
		},
		DialogModes.NO
	);
	// Camera Raw Filter
	jamEngine.jsonPlay
	(
		"Adobe Camera Raw Filter",
		{
			"'CMod'":
			{
				"<string>": "Filter"
			},
			"'Sett'":
			{
				"<enumerated>":
				{
					"'Sett'": "'Cst '"
				}
			},
			"'WBal'":
			{
				"<enumerated>":
				{
					"'WBal'": "'Cst '"
				}
			},
			"'Temp'":
			{
				"<integer>": -7
			},
			"'Tint'":
			{
				"<integer>": -9
			},
			"'CtoG'":
			{
				"<boolean>": false
			},
			"'Strt'":
			{
				"<integer>": 0
			},
			"'Shrp'":
			{
				"<integer>": 25
			},
			"'LNR '":
			{
				"<integer>": 0
			},
			"'CNR '":
			{
				"<integer>": 25
			},
			"'VigA'":
			{
				"<integer>": 0
			},
			"'BlkB'":
			{
				"<integer>": 0
			},
			"'RHue'":
			{
				"<integer>": 0
			},
			"'RSat'":
			{
				"<integer>": -58
			},
			"'GHue'":
			{
				"<integer>": 5
			},
			"'GSat'":
			{
				"<integer>": 20
			},
			"'BHue'":
			{
				"<integer>": 0
			},
			"'BSat'":
			{
				"<integer>": 100
			},
			"'Vibr'":
			{
				"<integer>": 0
			},
			"'HA_R'":
			{
				"<integer>": 0
			},
			"'HA_O'":
			{
				"<integer>": 0
			},
			"'HA_Y'":
			{
				"<integer>": 0
			},
			"'HA_G'":
			{
				"<integer>": -15
			},
			"'HA_A'":
			{
				"<integer>": 0
			},
			"'HA_B'":
			{
				"<integer>": 2
			},
			"'HA_P'":
			{
				"<integer>": 0
			},
			"'HA_M'":
			{
				"<integer>": 0
			},
			"'SA_R'":
			{
				"<integer>": 0
			},
			"'SA_O'":
			{
				"<integer>": 0
			},
			"'SA_Y'":
			{
				"<integer>": 65
			},
			"'SA_G'":
			{
				"<integer>": 46
			},
			"'SA_A'":
			{
				"<integer>": 0
			},
			"'SA_B'":
			{
				"<integer>": -39
			},
			"'SA_P'":
			{
				"<integer>": 0
			},
			"'SA_M'":
			{
				"<integer>": 0
			},
			"'LA_R'":
			{
				"<integer>": 19
			},
			"'LA_O'":
			{
				"<integer>": 20
			},
			"'LA_Y'":
			{
				"<integer>": 50
			},
			"'LA_G'":
			{
				"<integer>": 28
			},
			"'LA_A'":
			{
				"<integer>": -27
			},
			"'LA_B'":
			{
				"<integer>": -23
			},
			"'LA_P'":
			{
				"<integer>": -12
			},
			"'LA_M'":
			{
				"<integer>": -43
			},
			"'STSH'":
			{
				"<integer>": 57
			},
			"'STSS'":
			{
				"<integer>": 20
			},
			"'STHH'":
			{
				"<integer>": 248
			},
			"'STHS'":
			{
				"<integer>": 9
			},
			"'STB '":
			{
				"<integer>": 0
			},
			"'PC_S'":
			{
				"<integer>": -3
			},
			"'PC_D'":
			{
				"<integer>": 12
			},
			"'PC_L'":
			{
				"<integer>": 2
			},
			"'PC_H'":
			{
				"<integer>": 0
			},
			"'PC_1'":
			{
				"<integer>": 25
			},
			"'PC_2'":
			{
				"<integer>": 50
			},
			"'PC_3'":
			{
				"<integer>": 75
			},
			"'ShpR'":
			{
				"<double>": 1
			},
			"'ShpD'":
			{
				"<integer>": 25
			},
			"'ShpM'":
			{
				"<integer>": 0
			},
			"'PCVA'":
			{
				"<integer>": 0
			},
			"'GRNA'":
			{
				"<integer>": 0
			},
			"'CNRD'":
			{
				"<integer>": 50
			},
			"'CNRS'":
			{
				"<integer>": 50
			},
			"'LPEn'":
			{
				"<integer>": 0
			},
			"'MDis'":
			{
				"<integer>": 0
			},
			"'PerV'":
			{
				"<integer>": 0
			},
			"'PerH'":
			{
				"<integer>": 0
			},
			"'PerR'":
			{
				"<double>": 0
			},
			"'PerS'":
			{
				"<integer>": 100
			},
			"'PerA'":
			{
				"<integer>": 0
			},
			"'PerU'":
			{
				"<integer>": 0
			},
			"'PerX'":
			{
				"<double>": 0
			},
			"'PerY'":
			{
				"<double>": 0
			},
			"'AuCA'":
			{
				"<integer>": 0
			},
			"'Ex12'":
			{
				"<double>": 0.4
			},
			"'Cr12'":
			{
				"<integer>": 8
			},
			"'Hi12'":
			{
				"<integer>": -38
			},
			"'Sh12'":
			{
				"<integer>": 0
			},
			"'Wh12'":
			{
				"<integer>": -21
			},
			"'Bk12'":
			{
				"<integer>": 0
			},
			"'Cl12'":
			{
				"<integer>": 10
			},
			"'DfPA'":
			{
				"<integer>": 0
			},
			"'DPHL'":
			{
				"<integer>": 30
			},
			"'DPHH'":
			{
				"<integer>": 70
			},
			"'DfGA'":
			{
				"<integer>": 0
			},
			"'DPGL'":
			{
				"<integer>": 40
			},
			"'DPGH'":
			{
				"<integer>": 60
			},
			"'Dhze'":
			{
				"<integer>": 0
			},
			"'CrTx'":
			{
				"<integer>": 0
			},
			"'TMMs'":
			{
				"<integer>": 0
			},
			"'Crv '":
			{
				"<list>":
				[
					{
						"<integer>": 0
					},
					{
						"<integer>": 0
					},
					{
						"<integer>": 122
					},
					{
						"<integer>": 144
					},
					{
						"<integer>": 255
					},
					{
						"<integer>": 255
					}
				]
			},
			"'CrvR'":
			{
				"<list>":
				[
					{
						"<integer>": 0
					},
					{
						"<integer>": 0
					},
					{
						"<integer>": 255
					},
					{
						"<integer>": 255
					}
				]
			},
			"'CrvG'":
			{
				"<list>":
				[
					{
						"<integer>": 0
					},
					{
						"<integer>": 0
					},
					{
						"<integer>": 255
					},
					{
						"<integer>": 255
					}
				]
			},
			"'CrvB'":
			{
				"<list>":
				[
					{
						"<integer>": 0
					},
					{
						"<integer>": 0
					},
					{
						"<integer>": 255
					},
					{
						"<integer>": 255
					}
				]
			},
			"'CamP'":
			{
				"<string>": "Embedded"
			},
			"'CP_D'":
			{
				"<string>": "54650A341B5B5CCAE8442D0B43A92BCE"
			},
			"'PrVe'":
			{
				"<integer>": 184549376
			},
			"'Rtch'":
			{
				"<string>": ""
			},
			"'REye'":
			{
				"<string>": ""
			},
			"'LCs '":
			{
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:PaintBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.360000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.155597\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.137276 0.145800</rdf:li>\n           <rdf:li>d 0.132160 0.191869</rdf:li>\n           <rdf:li>d 0.128947 0.238323</rdf:li>\n           <rdf:li>d 0.125734 0.284777</rdf:li>\n           <rdf:li>d 0.123130 0.331317</rdf:li>\n           <rdf:li>d 0.120527 0.377857</rdf:li>\n           <rdf:li>d 0.118326 0.424444</rdf:li>\n           <rdf:li>d 0.116125 0.471030</rdf:li>\n           <rdf:li>d 0.114849 0.517695</rdf:li>\n           <rdf:li>d 0.113574 0.564359</rdf:li>\n           <rdf:li>d 0.112298 0.611024</rdf:li>\n           <rdf:li>d 0.112143 0.657727</rdf:li>\n           <rdf:li>d 0.111988 0.704430</rdf:li>\n           <rdf:li>d 0.112467 0.751128</rdf:li>\n           <rdf:li>d 0.112947 0.797826</rdf:li>\n           <rdf:li>d 0.113612 0.844519</rdf:li>\n           <rdf:li>d 0.114408 0.891208</rdf:li>\n           <rdf:li>d 0.114819 0.937908</rdf:li>\n           <rdf:li>d 0.116006 0.984577</rdf:li>\n           <rdf:li>d 0.109900 0.938781</rdf:li>\n           <rdf:li>d 0.104930 0.892677</rdf:li>\n           <rdf:li>d 0.098721 0.846912</rdf:li>\n           <rdf:li>d 0.091833 0.801367</rdf:li>\n           <rdf:li>d 0.086703 0.755302</rdf:li>\n           <rdf:li>d 0.082910 0.708947</rdf:li>\n           <rdf:li>d 0.079531 0.662519</rdf:li>\n           <rdf:li>d 0.075717 0.616168</rdf:li>\n           <rdf:li>d 0.073209 0.569616</rdf:li>\n           <rdf:li>d 0.072355 0.522930</rdf:li>\n           <rdf:li>d 0.074704 0.476359</rdf:li>\n           <rdf:li>d 0.079814 0.430289</rdf:li>\n           <rdf:li>d 0.088140 0.385288</rdf:li>\n           <rdf:li>d 0.097821 0.340902</rdf:li>\n           <rdf:li>d 0.111330 0.298828</rdf:li>\n           <rdf:li>d 0.128322 0.259702</rdf:li>\n           <rdf:li>d 0.148662 0.224354</rdf:li>\n           <rdf:li>d 0.172015 0.193486</rdf:li>\n           <rdf:li>d 0.196410 0.164488</rdf:li>\n           <rdf:li>d 0.221821 0.137530</rdf:li>\n           <rdf:li>d 0.248858 0.114404</rdf:li>\n           <rdf:li>d 0.227986 0.149046</rdf:li>\n           <rdf:li>d 0.206868 0.183349</rdf:li>\n           <rdf:li>d 0.190325 0.222907</rdf:li>\n           <rdf:li>d 0.181471 0.267681</rdf:li>\n           <rdf:li>d 0.177080 0.313917</rdf:li>\n           <rdf:li>d 0.176120 0.360598</rdf:li>\n           <rdf:li>d 0.177361 0.407265</rdf:li>\n           <rdf:li>d 0.179523 0.453856</rdf:li>\n           <rdf:li>d 0.183089 0.500252</rdf:li>\n           <rdf:li>d 0.186654 0.546648</rdf:li>\n           <rdf:li>d 0.190611 0.592973</rdf:li>\n           <rdf:li>d 0.196979 0.638688</rdf:li>\n           <rdf:li>d 0.205102 0.683773</rdf:li>\n           <rdf:li>d 0.216965 0.726950</rdf:li>\n           <rdf:li>d 0.228107 0.770557</rdf:li>\n           <rdf:li>d 0.243353 0.811272</rdf:li>\n           <rdf:li>d 0.263169 0.847283</rdf:li>\n           <rdf:li>d 0.284422 0.881399</rdf:li>\n           <rdf:li>d 0.291740 0.836005</rdf:li>\n           <rdf:li>d 0.293639 0.789388</rdf:li>\n           <rdf:li>d 0.291946 0.742754</rdf:li>\n           <rdf:li>d 0.288555 0.696328</rdf:li>\n           <rdf:li>d 0.282601 0.650487</rdf:li>\n           <rdf:li>d 0.274659 0.605330</rdf:li>\n           <rdf:li>d 0.267248 0.559970</rdf:li>\n           <rdf:li>d 0.277686 0.603968</rdf:li>\n           <rdf:li>d 0.287134 0.648467</rdf:li>\n           <rdf:li>d 0.294990 0.693658</rdf:li>\n           <rdf:li>d 0.300472 0.739632</rdf:li>\n           <rdf:li>d 0.305778 0.785651</rdf:li>\n           <rdf:li>d 0.310458 0.831824</rdf:li>\n           <rdf:li>d 0.315551 0.877898</rdf:li>\n           <rdf:li>d 0.320666 0.923967</rdf:li>\n           <rdf:li>d 0.322999 0.970539</rdf:li>\n           <rdf:li>d 0.300866 1.003369</rdf:li>\n           <rdf:li>d 0.269968 1.008937</rdf:li>\n           <rdf:li>d 0.238884 1.011155</rdf:li>\n           <rdf:li>d 0.207771 1.012086</rdf:li>\n           <rdf:li>d 0.176705 1.009350</rdf:li>\n           <rdf:li>d 0.145754 1.004499</rdf:li>\n           <rdf:li>d 0.115800 0.991836</rdf:li>\n           <rdf:li>d 0.087021 0.974067</rdf:li>\n           <rdf:li>d 0.117880 0.980094</rdf:li>\n           <rdf:li>d 0.148624 0.987327</rdf:li>\n           <rdf:li>d 0.179368 0.994560</rdf:li>\n           <rdf:li>d 0.210283 0.999907</rdf:li>\n           <rdf:li>d 0.241118 1.006206</rdf:li>\n           <rdf:li>d 0.271740 1.014524</rdf:li>\n           <rdf:li>d 0.301948 1.025743</rdf:li>\n           <rdf:li>d 0.331052 1.042278</rdf:li>\n           <rdf:li>d 0.360375 1.057915</rdf:li>\n           <rdf:li>d 0.390829 1.067518</rdf:li>\n           <rdf:li>d 0.421810 1.071918</rdf:li>\n           <rdf:li>d 0.452835 1.075554</rdf:li>\n           <rdf:li>d 0.482682 1.062333</rdf:li>\n           <rdf:li>d 0.512902 1.051186</rdf:li>\n           <rdf:li>d 0.542460 1.036582</rdf:li>\n           <rdf:li>d 0.563006 1.001503</rdf:li>\n           <rdf:li>d 0.573524 0.957548</rdf:li>\n           <rdf:li>d 0.581371 0.912354</rdf:li>\n           <rdf:li>d 0.585438 0.866051</rdf:li>\n           <rdf:li>d 0.576537 0.910803</rdf:li>\n           <rdf:li>d 0.573989 0.957350</rdf:li>\n           <rdf:li>d 0.570826 1.003812</rdf:li>\n           <rdf:li>d 0.570244 1.050507</rdf:li>\n           <rdf:li>d 0.580648 1.094523</rdf:li>\n           <rdf:li>d 0.604663 1.124226</rdf:li>\n           <rdf:li>d 0.631967 1.146632</rdf:li>\n           <rdf:li>d 0.661023 1.163357</rdf:li>\n           <rdf:li>d 0.691923 1.168890</rdf:li>\n           <rdf:li>d 0.722948 1.172525</rdf:li>\n           <rdf:li>d 0.754047 1.174234</rdf:li>\n           <rdf:li>d 0.785151 1.172793</rdf:li>\n           <rdf:li>d 0.816256 1.171353</rdf:li>\n           <rdf:li>d 0.847149 1.165731</rdf:li>\n           <rdf:li>d 0.877769 1.157398</rdf:li>\n           <rdf:li>d 0.907480 1.143507</rdf:li>\n           <rdf:li>d 0.935723 1.123896</rdf:li>\n           <rdf:li>d 0.959402 1.093591</rdf:li>\n           <rdf:li>d 0.970808 1.050138</rdf:li>\n           <rdf:li>d 0.958593 1.007182</rdf:li>\n           <rdf:li>d 0.942227 0.967459</rdf:li>\n           <rdf:li>d 0.915582 0.943330</rdf:li>\n           <rdf:li>d 0.893666 0.910174</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.182352\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.893347 0.090333</rdf:li>\n           <rdf:li>d 0.858097 0.104369</rdf:li>\n           <rdf:li>d 0.822305 0.114879</rdf:li>\n           <rdf:li>d 0.786067 0.121056</rdf:li>\n           <rdf:li>d 0.749673 0.124589</rdf:li>\n           <rdf:li>d 0.713231 0.126756</rdf:li>\n           <rdf:li>d 0.676876 0.122408</rdf:li>\n           <rdf:li>d 0.643176 0.101484</rdf:li>\n           <rdf:li>d 0.610175 0.078184</rdf:li>\n           <rdf:li>d 0.575910 0.059438</rdf:li>\n           <rdf:li>d 0.540262 0.047885</rdf:li>\n           <rdf:li>d 0.504103 0.040743</rdf:li>\n           <rdf:li>d 0.467719 0.036987</rdf:li>\n           <rdf:li>d 0.431268 0.035198</rdf:li>\n           <rdf:li>d 0.394884 0.038968</rdf:li>\n           <rdf:li>d 0.358645 0.045127</rdf:li>\n           <rdf:li>d 0.322883 0.055858</rdf:li>\n           <rdf:li>d 0.359328 0.057889</rdf:li>\n           <rdf:li>d 0.395648 0.052924</rdf:li>\n           <rdf:li>d 0.431699 0.044644</rdf:li>\n           <rdf:li>d 0.467922 0.038282</rdf:li>\n           <rdf:li>d 0.504278 0.033964</rdf:li>\n           <rdf:li>d 0.540737 0.032552</rdf:li>\n           <rdf:li>d 0.577204 0.031879</rdf:li>\n           <rdf:li>d 0.613577 0.035876</rdf:li>\n           <rdf:li>d 0.642900 0.068422</rdf:li>\n           <rdf:li>d 0.659423 0.117217</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.102087\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.677930 0.263074</rdf:li>\n           <rdf:li>d 0.671274 0.292043</rdf:li>\n           <rdf:li>d 0.662881 0.319976</rdf:li>\n           <rdf:li>d 0.651711 0.345626</rdf:li>\n           <rdf:li>d 0.639615 0.370312</rdf:li>\n           <rdf:li>d 0.651290 0.345174</rdf:li>\n           <rdf:li>d 0.664812 0.322215</rdf:li>\n           <rdf:li>d 0.678334 0.299256</rdf:li>\n           <rdf:li>d 0.693327 0.278457</rdf:li>\n           <rdf:li>d 0.709458 0.259672</rdf:li>\n           <rdf:li>d 0.725590 0.240888</rdf:li>\n           <rdf:li>d 0.743031 0.224959</rdf:li>\n           <rdf:li>d 0.760708 0.209623</rdf:li>\n           <rdf:li>d 0.778384 0.194288</rdf:li>\n           <rdf:li>d 0.796446 0.180000</rdf:li>\n           <rdf:li>d 0.814508 0.165713</rdf:li>\n           <rdf:li>d 0.832574 0.151436</rdf:li>\n           <rdf:li>d 0.850591 0.137021</rdf:li>\n           <rdf:li>d 0.868776 0.123088</rdf:li>\n           <rdf:li>d 0.885567 0.140522</rdf:li>\n           <rdf:li>d 0.893182 0.168954</rdf:li>\n           <rdf:li>d 0.898379 0.198587</rdf:li>\n           <rdf:li>d 0.905033 0.227556</rdf:li>\n           <rdf:li>d 0.912087 0.256311</rdf:li>\n           <rdf:li>d 0.920597 0.284165</rdf:li>\n           <rdf:li>d 0.929442 0.311783</rdf:li>\n           <rdf:li>d 0.939801 0.338188</rdf:li>\n           <rdf:li>d 0.950936 0.363872</rdf:li>\n           <rdf:li>d 0.962295 0.338410</rdf:li>\n           <rdf:li>d 0.965822 0.308228</rdf:li>\n           <rdf:li>d 0.968441 0.277839</rdf:li>\n           <rdf:li>d 0.971060 0.247450</rdf:li>\n           <rdf:li>d 0.971355 0.216811</rdf:li>\n           <rdf:li>d 0.971451 0.186169</rdf:li>\n           <rdf:li>d 0.969749 0.155633</rdf:li>\n           <rdf:li>d 0.966238 0.125448</rdf:li>\n           <rdf:li>d 0.961906 0.095503</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"-0.075000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.209107\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.153115 0.415214</rdf:li>\n           <rdf:li>d 0.149187 0.477702</rdf:li>\n           <rdf:li>d 0.143341 0.539851</rdf:li>\n           <rdf:li>d 0.139244 0.602314</rdf:li>\n           <rdf:li>d 0.136834 0.664975</rdf:li>\n           <rdf:li>d 0.134768 0.727663</rdf:li>\n           <rdf:li>d 0.132004 0.790291</rdf:li>\n           <rdf:li>d 0.129036 0.852898</rdf:li>\n           <rdf:li>d 0.126246 0.915524</rdf:li>\n           <rdf:li>d 0.128659 0.978184</rdf:li>\n           <rdf:li>d 0.154130 1.027966</rdf:li>\n           <rdf:li>d 0.195364 1.038446</rdf:li>\n           <rdf:li>d 0.237067 1.043156</rdf:li>\n           <rdf:li>d 0.278857 1.040722</rdf:li>\n           <rdf:li>d 0.320259 1.031857</rdf:li>\n           <rdf:li>d 0.330809 0.971122</rdf:li>\n           <rdf:li>d 0.325569 0.908851</rdf:li>\n           <rdf:li>d 0.349631 0.960187</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.115464\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.859556 0.824089</rdf:li>\n           <rdf:li>d 0.858787 0.858727</rdf:li>\n           <rdf:li>d 0.857107 0.893293</rdf:li>\n           <rdf:li>d 0.854646 0.927753</rdf:li>\n           <rdf:li>d 0.851844 0.962155</rdf:li>\n           <rdf:li>d 0.849264 0.996595</rdf:li>\n           <rdf:li>d 0.847282 1.031125</rdf:li>\n           <rdf:li>d 0.846894 1.065778</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.115464\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.972545 0.714739</rdf:li>\n           <rdf:li>d 0.982584 0.745949</rdf:li>\n           <rdf:li>d 0.990369 0.778579</rdf:li>\n           <rdf:li>d 0.997814 0.811386</rdf:li>\n           <rdf:li>d 1.004551 0.844536</rdf:li>\n           <rdf:li>d 1.010416 0.878057</rdf:li>\n           <rdf:li>d 1.017091 0.911235</rdf:li>\n           <rdf:li>d 1.023736 0.944427</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.102087\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.767687 0.269414</rdf:li>\n           <rdf:li>d 0.751250 0.287591</rdf:li>\n           <rdf:li>d 0.732746 0.300543</rdf:li>\n           <rdf:li>d 0.713232 0.309554</rdf:li>\n           <rdf:li>d 0.693508 0.317469</rdf:li>\n           <rdf:li>d 0.673555 0.323971</rdf:li>\n           <rdf:li>d 0.653408 0.328936</rdf:li>\n           <rdf:li>d 0.633265 0.333943</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.125000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.128842\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.780359 0.066561</rdf:li>\n           <rdf:li>d 0.754961 0.073095</rdf:li>\n           <rdf:li>d 0.729280 0.076268</rdf:li>\n           <rdf:li>d 0.703517 0.077101</rdf:li>\n           <rdf:li>d 0.677749 0.077364</rdf:li>\n           <rdf:li>d 0.651982 0.077628</rdf:li>\n           <rdf:li>d 0.626251 0.075526</rdf:li>\n           <rdf:li>d 0.600486 0.074949</rdf:li>\n           <rdf:li>d 0.574725 0.074000</rdf:li>\n           <rdf:li>d 0.548965 0.073051</rdf:li>\n           <rdf:li>d 0.523196 0.072939</rdf:li>\n           <rdf:li>d 0.497527 0.069558</rdf:li>\n           <rdf:li>d 0.471792 0.067592</rdf:li>\n           <rdf:li>d 0.446118 0.064275</rdf:li>\n           <rdf:li>d 0.420723 0.057714</rdf:li>\n           <rdf:li>d 0.446386 0.054210</rdf:li>\n           <rdf:li>d 0.472147 0.053300</rdf:li>\n           <rdf:li>d 0.497908 0.052390</rdf:li>\n           <rdf:li>d 0.523633 0.050151</rdf:li>\n           <rdf:li>d 0.549358 0.047887</rdf:li>\n           <rdf:li>d 0.575106 0.046378</rdf:li>\n           <rdf:li>d 0.600855 0.044869</rdf:li>\n           <rdf:li>d 0.626583 0.042691</rdf:li>\n           <rdf:li>d 0.652306 0.040405</rdf:li>\n           <rdf:li>d 0.678029 0.038120</rdf:li>\n           <rdf:li>d 0.703753 0.035849</rdf:li>\n           <rdf:li>d 0.729429 0.032570</rdf:li>\n           <rdf:li>d 0.755160 0.030483</rdf:li>\n           <rdf:li>d 0.780903 0.028786</rdf:li>\n           <rdf:li>d 0.806647 0.027088</rdf:li>\n           <rdf:li>d 0.832394 0.025530</rdf:li>\n           <rdf:li>d 0.858011 0.021342</rdf:li>\n           <rdf:li>d 0.883668 0.017753</rdf:li>\n           <rdf:li>d 0.909244 0.013032</rdf:li>\n           <rdf:li>d 0.934931 0.009965</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.500000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.182352\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.473073 0.058637</rdf:li>\n           <rdf:li>d 0.509159 0.066563</rdf:li>\n           <rdf:li>d 0.545517 0.070856</rdf:li>\n           <rdf:li>d 0.581888 0.074900</rdf:li>\n           <rdf:li>d 0.618258 0.078945</rdf:li>\n           <rdf:li>d 0.654728 0.079100</rdf:li>\n           <rdf:li>d 0.691196 0.079777</rdf:li>\n           <rdf:li>d 0.727664 0.080454</rdf:li>\n           <rdf:li>d 0.764103 0.078192</rdf:li>\n           <rdf:li>d 0.800529 0.075484</rdf:li>\n           <rdf:li>d 0.836916 0.071806</rdf:li>\n           <rdf:li>d 0.872929 0.063160</rdf:li>\n           <rdf:li>d 0.908306 0.049857</rdf:li>\n           <rdf:li>d 0.871911 0.046337</rdf:li>\n           <rdf:li>d 0.835576 0.041631</rdf:li>\n           <rdf:li>d 0.799283 0.036235</rdf:li>\n           <rdf:li>d 0.762977 0.031035</rdf:li>\n           <rdf:li>d 0.726672 0.025834</rdf:li>\n           <rdf:li>d 0.690291 0.022012</rdf:li>\n           <rdf:li>d 0.653936 0.017655</rdf:li>\n           <rdf:li>d 0.617549 0.013949</rdf:li>\n           <rdf:li>d 0.581296 0.007987</rdf:li>\n           <rdf:li>d 0.545947 -0.005481</rdf:li>\n           <rdf:li>d 0.509932 -0.014102</rdf:li>\n           <rdf:li>d 0.473544 -0.017792</rdf:li>\n           <rdf:li>d 0.437083 -0.018986</rdf:li>\n           <rdf:li>d 0.400621 -0.020151</rdf:li>\n           <rdf:li>d 0.364151 -0.020537</rdf:li>\n           <rdf:li>d 0.327738 -0.017465</rdf:li>\n           <rdf:li>d 0.291740 -0.008688</rdf:li>\n           <rdf:li>d 0.256063 0.002668</rdf:li>\n           <rdf:li>d 0.222379 0.023651</rdf:li>\n           <rdf:li>d 0.194899 0.059637</rdf:li>\n           <rdf:li>d 0.175065 0.105569</rdf:li>\n           <rdf:li>d 0.163052 0.157249</rdf:li>\n           <rdf:li>d 0.152142 0.209477</rdf:li>\n           <rdf:li>d 0.144429 0.262973</rdf:li>\n           <rdf:li>d 0.138253 0.316917</rdf:li>\n           <rdf:li>d 0.132826 0.371043</rdf:li>\n           <rdf:li>d 0.129462 0.425544</rdf:li>\n           <rdf:li>d 0.126065 0.480040</rdf:li>\n           <rdf:li>d 0.123594 0.534649</rdf:li>\n           <rdf:li>d 0.120902 0.589234</rdf:li>\n           <rdf:li>d 0.117445 0.643722</rdf:li>\n           <rdf:li>d 0.115414 0.698371</rdf:li>\n           <rdf:li>d 0.114510 0.753089</rdf:li>\n           <rdf:li>d 0.114116 0.807820</rdf:li>\n           <rdf:li>d 0.115028 0.862538</rdf:li>\n           <rdf:li>d 0.114233 0.917259</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:PaintBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n"
			},
			"'Upri'":
			{
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightVersion=\"151388160\"\n   crs:UprightCenterMode=\"0\"\n   crs:UprightCenterNormX=\"0.5\"\n   crs:UprightCenterNormY=\"0.5\"\n   crs:UprightFocalMode=\"0\"\n   crs:UprightFocalLength35mm=\"35\"\n   crs:UprightPreview=\"False\"\n   crs:UprightTransformCount=\"6\"/>\n </rdf:RDF>\n</x:xmpmeta>\n"
			},
			"'GuUr'":
			{
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightFourSegmentsCount=\"0\"/>\n </rdf:RDF>\n</x:xmpmeta>\n"
			},
			"'Look'":
			{
				"<string>": ""
			},
			"'Pset'":
			{
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"AG9X3887\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"DD416948FF8855371A0AC96A10F8E784\"\n     crs:SupportsAmount=\"false\"\n     crs:LookAmount=\"0.000000\">\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"11.3\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"Custom\"\n      crs:IncrementalTemperature=\"-7\"\n      crs:IncrementalTint=\"-9\"\n      crs:Saturation=\"0\"\n      crs:Sharpness=\"25\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:VignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"-58\"\n      crs:GreenHue=\"+5\"\n      crs:GreenSaturation=\"+20\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"+100\"\n      crs:Vibrance=\"0\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"-15\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"+2\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"0\"\n      crs:SaturationAdjustmentYellow=\"+65\"\n      crs:SaturationAdjustmentGreen=\"+46\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"-39\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+19\"\n      crs:LuminanceAdjustmentOrange=\"+20\"\n      crs:LuminanceAdjustmentYellow=\"+50\"\n      crs:LuminanceAdjustmentGreen=\"+28\"\n      crs:LuminanceAdjustmentAqua=\"-27\"\n      crs:LuminanceAdjustmentBlue=\"-23\"\n      crs:LuminanceAdjustmentPurple=\"-12\"\n      crs:LuminanceAdjustmentMagenta=\"-43\"\n      crs:SplitToningShadowHue=\"57\"\n      crs:SplitToningShadowSaturation=\"20\"\n      crs:SplitToningHighlightHue=\"248\"\n      crs:SplitToningHighlightSaturation=\"9\"\n      crs:SplitToningBalance=\"0\"\n      crs:ParametricShadows=\"-3\"\n      crs:ParametricDarks=\"+12\"\n      crs:ParametricLights=\"+2\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:GrainAmount=\"0\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveUpright=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:Exposure2012=\"+0.40\"\n      crs:Contrast2012=\"+8\"\n      crs:Highlights2012=\"-38\"\n      crs:Shadows2012=\"0\"\n      crs:Whites2012=\"-21\"\n      crs:Blacks2012=\"0\"\n      crs:Clarity2012=\"+10\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:Dehaze=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName=\"Medium Contrast\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"LensDefaults\">\n     <crs:ToneCurve>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>32, 22</rdf:li>\n       <rdf:li>64, 56</rdf:li>\n       <rdf:li>128, 128</rdf:li>\n       <rdf:li>192, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurve>\n     <crs:ToneCurveRed>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurveRed>\n     <crs:ToneCurveGreen>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurveGreen>\n     <crs:ToneCurveBlue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurveBlue>\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>122, 144</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:PaintBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.360000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.155597\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.137276 0.145800</rdf:li>\n             <rdf:li>d 0.132160 0.191869</rdf:li>\n             <rdf:li>d 0.128947 0.238323</rdf:li>\n             <rdf:li>d 0.125734 0.284777</rdf:li>\n             <rdf:li>d 0.123130 0.331317</rdf:li>\n             <rdf:li>d 0.120527 0.377857</rdf:li>\n             <rdf:li>d 0.118326 0.424444</rdf:li>\n             <rdf:li>d 0.116125 0.471030</rdf:li>\n             <rdf:li>d 0.114849 0.517695</rdf:li>\n             <rdf:li>d 0.113574 0.564359</rdf:li>\n             <rdf:li>d 0.112298 0.611024</rdf:li>\n             <rdf:li>d 0.112143 0.657727</rdf:li>\n             <rdf:li>d 0.111988 0.704430</rdf:li>\n             <rdf:li>d 0.112467 0.751128</rdf:li>\n             <rdf:li>d 0.112947 0.797826</rdf:li>\n             <rdf:li>d 0.113612 0.844519</rdf:li>\n             <rdf:li>d 0.114408 0.891208</rdf:li>\n             <rdf:li>d 0.114819 0.937908</rdf:li>\n             <rdf:li>d 0.116006 0.984577</rdf:li>\n             <rdf:li>d 0.109900 0.938781</rdf:li>\n             <rdf:li>d 0.104930 0.892677</rdf:li>\n             <rdf:li>d 0.098721 0.846912</rdf:li>\n             <rdf:li>d 0.091833 0.801367</rdf:li>\n             <rdf:li>d 0.086703 0.755302</rdf:li>\n             <rdf:li>d 0.082910 0.708947</rdf:li>\n             <rdf:li>d 0.079531 0.662519</rdf:li>\n             <rdf:li>d 0.075717 0.616168</rdf:li>\n             <rdf:li>d 0.073209 0.569616</rdf:li>\n             <rdf:li>d 0.072355 0.522930</rdf:li>\n             <rdf:li>d 0.074704 0.476359</rdf:li>\n             <rdf:li>d 0.079814 0.430289</rdf:li>\n             <rdf:li>d 0.088140 0.385288</rdf:li>\n             <rdf:li>d 0.097821 0.340902</rdf:li>\n             <rdf:li>d 0.111330 0.298828</rdf:li>\n             <rdf:li>d 0.128322 0.259702</rdf:li>\n             <rdf:li>d 0.148662 0.224354</rdf:li>\n             <rdf:li>d 0.172015 0.193486</rdf:li>\n             <rdf:li>d 0.196410 0.164488</rdf:li>\n             <rdf:li>d 0.221821 0.137530</rdf:li>\n             <rdf:li>d 0.248858 0.114404</rdf:li>\n             <rdf:li>d 0.227986 0.149046</rdf:li>\n             <rdf:li>d 0.206868 0.183349</rdf:li>\n             <rdf:li>d 0.190325 0.222907</rdf:li>\n             <rdf:li>d 0.181471 0.267681</rdf:li>\n             <rdf:li>d 0.177080 0.313917</rdf:li>\n             <rdf:li>d 0.176120 0.360598</rdf:li>\n             <rdf:li>d 0.177361 0.407265</rdf:li>\n             <rdf:li>d 0.179523 0.453856</rdf:li>\n             <rdf:li>d 0.183089 0.500252</rdf:li>\n             <rdf:li>d 0.186654 0.546648</rdf:li>\n             <rdf:li>d 0.190611 0.592973</rdf:li>\n             <rdf:li>d 0.196979 0.638688</rdf:li>\n             <rdf:li>d 0.205102 0.683773</rdf:li>\n             <rdf:li>d 0.216965 0.726950</rdf:li>\n             <rdf:li>d 0.228107 0.770557</rdf:li>\n             <rdf:li>d 0.243353 0.811272</rdf:li>\n             <rdf:li>d 0.263169 0.847283</rdf:li>\n             <rdf:li>d 0.284422 0.881399</rdf:li>\n             <rdf:li>d 0.291740 0.836005</rdf:li>\n             <rdf:li>d 0.293639 0.789388</rdf:li>\n             <rdf:li>d 0.291946 0.742754</rdf:li>\n             <rdf:li>d 0.288555 0.696328</rdf:li>\n             <rdf:li>d 0.282601 0.650487</rdf:li>\n             <rdf:li>d 0.274659 0.605330</rdf:li>\n             <rdf:li>d 0.267248 0.559970</rdf:li>\n             <rdf:li>d 0.277686 0.603968</rdf:li>\n             <rdf:li>d 0.287134 0.648467</rdf:li>\n             <rdf:li>d 0.294990 0.693658</rdf:li>\n             <rdf:li>d 0.300472 0.739632</rdf:li>\n             <rdf:li>d 0.305778 0.785651</rdf:li>\n             <rdf:li>d 0.310458 0.831824</rdf:li>\n             <rdf:li>d 0.315551 0.877898</rdf:li>\n             <rdf:li>d 0.320666 0.923967</rdf:li>\n             <rdf:li>d 0.322999 0.970539</rdf:li>\n             <rdf:li>d 0.300866 1.003369</rdf:li>\n             <rdf:li>d 0.269968 1.008937</rdf:li>\n             <rdf:li>d 0.238884 1.011155</rdf:li>\n             <rdf:li>d 0.207771 1.012086</rdf:li>\n             <rdf:li>d 0.176705 1.009350</rdf:li>\n             <rdf:li>d 0.145754 1.004499</rdf:li>\n             <rdf:li>d 0.115800 0.991836</rdf:li>\n             <rdf:li>d 0.087021 0.974067</rdf:li>\n             <rdf:li>d 0.117880 0.980094</rdf:li>\n             <rdf:li>d 0.148624 0.987327</rdf:li>\n             <rdf:li>d 0.179368 0.994560</rdf:li>\n             <rdf:li>d 0.210283 0.999907</rdf:li>\n             <rdf:li>d 0.241118 1.006206</rdf:li>\n             <rdf:li>d 0.271740 1.014524</rdf:li>\n             <rdf:li>d 0.301948 1.025743</rdf:li>\n             <rdf:li>d 0.331052 1.042278</rdf:li>\n             <rdf:li>d 0.360375 1.057915</rdf:li>\n             <rdf:li>d 0.390829 1.067518</rdf:li>\n             <rdf:li>d 0.421810 1.071918</rdf:li>\n             <rdf:li>d 0.452835 1.075554</rdf:li>\n             <rdf:li>d 0.482682 1.062333</rdf:li>\n             <rdf:li>d 0.512902 1.051186</rdf:li>\n             <rdf:li>d 0.542460 1.036582</rdf:li>\n             <rdf:li>d 0.563006 1.001503</rdf:li>\n             <rdf:li>d 0.573524 0.957548</rdf:li>\n             <rdf:li>d 0.581371 0.912354</rdf:li>\n             <rdf:li>d 0.585438 0.866051</rdf:li>\n             <rdf:li>d 0.576537 0.910803</rdf:li>\n             <rdf:li>d 0.573989 0.957350</rdf:li>\n             <rdf:li>d 0.570826 1.003812</rdf:li>\n             <rdf:li>d 0.570244 1.050507</rdf:li>\n             <rdf:li>d 0.580648 1.094523</rdf:li>\n             <rdf:li>d 0.604663 1.124226</rdf:li>\n             <rdf:li>d 0.631967 1.146632</rdf:li>\n             <rdf:li>d 0.661023 1.163357</rdf:li>\n             <rdf:li>d 0.691923 1.168890</rdf:li>\n             <rdf:li>d 0.722948 1.172525</rdf:li>\n             <rdf:li>d 0.754047 1.174234</rdf:li>\n             <rdf:li>d 0.785151 1.172793</rdf:li>\n             <rdf:li>d 0.816256 1.171353</rdf:li>\n             <rdf:li>d 0.847149 1.165731</rdf:li>\n             <rdf:li>d 0.877769 1.157398</rdf:li>\n             <rdf:li>d 0.907480 1.143507</rdf:li>\n             <rdf:li>d 0.935723 1.123896</rdf:li>\n             <rdf:li>d 0.959402 1.093591</rdf:li>\n             <rdf:li>d 0.970808 1.050138</rdf:li>\n             <rdf:li>d 0.958593 1.007182</rdf:li>\n             <rdf:li>d 0.942227 0.967459</rdf:li>\n             <rdf:li>d 0.915582 0.943330</rdf:li>\n             <rdf:li>d 0.893666 0.910174</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.182352\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.893347 0.090333</rdf:li>\n             <rdf:li>d 0.858097 0.104369</rdf:li>\n             <rdf:li>d 0.822305 0.114879</rdf:li>\n             <rdf:li>d 0.786067 0.121056</rdf:li>\n             <rdf:li>d 0.749673 0.124589</rdf:li>\n             <rdf:li>d 0.713231 0.126756</rdf:li>\n             <rdf:li>d 0.676876 0.122408</rdf:li>\n             <rdf:li>d 0.643176 0.101484</rdf:li>\n             <rdf:li>d 0.610175 0.078184</rdf:li>\n             <rdf:li>d 0.575910 0.059438</rdf:li>\n             <rdf:li>d 0.540262 0.047885</rdf:li>\n             <rdf:li>d 0.504103 0.040743</rdf:li>\n             <rdf:li>d 0.467719 0.036987</rdf:li>\n             <rdf:li>d 0.431268 0.035198</rdf:li>\n             <rdf:li>d 0.394884 0.038968</rdf:li>\n             <rdf:li>d 0.358645 0.045127</rdf:li>\n             <rdf:li>d 0.322883 0.055858</rdf:li>\n             <rdf:li>d 0.359328 0.057889</rdf:li>\n             <rdf:li>d 0.395648 0.052924</rdf:li>\n             <rdf:li>d 0.431699 0.044644</rdf:li>\n             <rdf:li>d 0.467922 0.038282</rdf:li>\n             <rdf:li>d 0.504278 0.033964</rdf:li>\n             <rdf:li>d 0.540737 0.032552</rdf:li>\n             <rdf:li>d 0.577204 0.031879</rdf:li>\n             <rdf:li>d 0.613577 0.035876</rdf:li>\n             <rdf:li>d 0.642900 0.068422</rdf:li>\n             <rdf:li>d 0.659423 0.117217</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.102087\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.677930 0.263074</rdf:li>\n             <rdf:li>d 0.671274 0.292043</rdf:li>\n             <rdf:li>d 0.662881 0.319976</rdf:li>\n             <rdf:li>d 0.651711 0.345626</rdf:li>\n             <rdf:li>d 0.639615 0.370312</rdf:li>\n             <rdf:li>d 0.651290 0.345174</rdf:li>\n             <rdf:li>d 0.664812 0.322215</rdf:li>\n             <rdf:li>d 0.678334 0.299256</rdf:li>\n             <rdf:li>d 0.693327 0.278457</rdf:li>\n             <rdf:li>d 0.709458 0.259672</rdf:li>\n             <rdf:li>d 0.725590 0.240888</rdf:li>\n             <rdf:li>d 0.743031 0.224959</rdf:li>\n             <rdf:li>d 0.760708 0.209623</rdf:li>\n             <rdf:li>d 0.778384 0.194288</rdf:li>\n             <rdf:li>d 0.796446 0.180000</rdf:li>\n             <rdf:li>d 0.814508 0.165713</rdf:li>\n             <rdf:li>d 0.832574 0.151436</rdf:li>\n             <rdf:li>d 0.850591 0.137021</rdf:li>\n             <rdf:li>d 0.868776 0.123088</rdf:li>\n             <rdf:li>d 0.885567 0.140522</rdf:li>\n             <rdf:li>d 0.893182 0.168954</rdf:li>\n             <rdf:li>d 0.898379 0.198587</rdf:li>\n             <rdf:li>d 0.905033 0.227556</rdf:li>\n             <rdf:li>d 0.912087 0.256311</rdf:li>\n             <rdf:li>d 0.920597 0.284165</rdf:li>\n             <rdf:li>d 0.929442 0.311783</rdf:li>\n             <rdf:li>d 0.939801 0.338188</rdf:li>\n             <rdf:li>d 0.950936 0.363872</rdf:li>\n             <rdf:li>d 0.962295 0.338410</rdf:li>\n             <rdf:li>d 0.965822 0.308228</rdf:li>\n             <rdf:li>d 0.968441 0.277839</rdf:li>\n             <rdf:li>d 0.971060 0.247450</rdf:li>\n             <rdf:li>d 0.971355 0.216811</rdf:li>\n             <rdf:li>d 0.971451 0.186169</rdf:li>\n             <rdf:li>d 0.969749 0.155633</rdf:li>\n             <rdf:li>d 0.966238 0.125448</rdf:li>\n             <rdf:li>d 0.961906 0.095503</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"-0.075000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.209107\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.153115 0.415214</rdf:li>\n             <rdf:li>d 0.149187 0.477702</rdf:li>\n             <rdf:li>d 0.143341 0.539851</rdf:li>\n             <rdf:li>d 0.139244 0.602314</rdf:li>\n             <rdf:li>d 0.136834 0.664975</rdf:li>\n             <rdf:li>d 0.134768 0.727663</rdf:li>\n             <rdf:li>d 0.132004 0.790291</rdf:li>\n             <rdf:li>d 0.129036 0.852898</rdf:li>\n             <rdf:li>d 0.126246 0.915524</rdf:li>\n             <rdf:li>d 0.128659 0.978184</rdf:li>\n             <rdf:li>d 0.154130 1.027966</rdf:li>\n             <rdf:li>d 0.195364 1.038446</rdf:li>\n             <rdf:li>d 0.237067 1.043156</rdf:li>\n             <rdf:li>d 0.278857 1.040722</rdf:li>\n             <rdf:li>d 0.320259 1.031857</rdf:li>\n             <rdf:li>d 0.330809 0.971122</rdf:li>\n             <rdf:li>d 0.325569 0.908851</rdf:li>\n             <rdf:li>d 0.349631 0.960187</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.115464\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.859556 0.824089</rdf:li>\n             <rdf:li>d 0.858787 0.858727</rdf:li>\n             <rdf:li>d 0.857107 0.893293</rdf:li>\n             <rdf:li>d 0.854646 0.927753</rdf:li>\n             <rdf:li>d 0.851844 0.962155</rdf:li>\n             <rdf:li>d 0.849264 0.996595</rdf:li>\n             <rdf:li>d 0.847282 1.031125</rdf:li>\n             <rdf:li>d 0.846894 1.065778</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.115464\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.972545 0.714739</rdf:li>\n             <rdf:li>d 0.982584 0.745949</rdf:li>\n             <rdf:li>d 0.990369 0.778579</rdf:li>\n             <rdf:li>d 0.997814 0.811386</rdf:li>\n             <rdf:li>d 1.004551 0.844536</rdf:li>\n             <rdf:li>d 1.010416 0.878057</rdf:li>\n             <rdf:li>d 1.017091 0.911235</rdf:li>\n             <rdf:li>d 1.023736 0.944427</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.102087\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.767687 0.269414</rdf:li>\n             <rdf:li>d 0.751250 0.287591</rdf:li>\n             <rdf:li>d 0.732746 0.300543</rdf:li>\n             <rdf:li>d 0.713232 0.309554</rdf:li>\n             <rdf:li>d 0.693508 0.317469</rdf:li>\n             <rdf:li>d 0.673555 0.323971</rdf:li>\n             <rdf:li>d 0.653408 0.328936</rdf:li>\n             <rdf:li>d 0.633265 0.333943</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.125000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.128842\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.780359 0.066561</rdf:li>\n             <rdf:li>d 0.754961 0.073095</rdf:li>\n             <rdf:li>d 0.729280 0.076268</rdf:li>\n             <rdf:li>d 0.703517 0.077101</rdf:li>\n             <rdf:li>d 0.677749 0.077364</rdf:li>\n             <rdf:li>d 0.651982 0.077628</rdf:li>\n             <rdf:li>d 0.626251 0.075526</rdf:li>\n             <rdf:li>d 0.600486 0.074949</rdf:li>\n             <rdf:li>d 0.574725 0.074000</rdf:li>\n             <rdf:li>d 0.548965 0.073051</rdf:li>\n             <rdf:li>d 0.523196 0.072939</rdf:li>\n             <rdf:li>d 0.497527 0.069558</rdf:li>\n             <rdf:li>d 0.471792 0.067592</rdf:li>\n             <rdf:li>d 0.446118 0.064275</rdf:li>\n             <rdf:li>d 0.420723 0.057714</rdf:li>\n             <rdf:li>d 0.446386 0.054210</rdf:li>\n             <rdf:li>d 0.472147 0.053300</rdf:li>\n             <rdf:li>d 0.497908 0.052390</rdf:li>\n             <rdf:li>d 0.523633 0.050151</rdf:li>\n             <rdf:li>d 0.549358 0.047887</rdf:li>\n             <rdf:li>d 0.575106 0.046378</rdf:li>\n             <rdf:li>d 0.600855 0.044869</rdf:li>\n             <rdf:li>d 0.626583 0.042691</rdf:li>\n             <rdf:li>d 0.652306 0.040405</rdf:li>\n             <rdf:li>d 0.678029 0.038120</rdf:li>\n             <rdf:li>d 0.703753 0.035849</rdf:li>\n             <rdf:li>d 0.729429 0.032570</rdf:li>\n             <rdf:li>d 0.755160 0.030483</rdf:li>\n             <rdf:li>d 0.780903 0.028786</rdf:li>\n             <rdf:li>d 0.806647 0.027088</rdf:li>\n             <rdf:li>d 0.832394 0.025530</rdf:li>\n             <rdf:li>d 0.858011 0.021342</rdf:li>\n             <rdf:li>d 0.883668 0.017753</rdf:li>\n             <rdf:li>d 0.909244 0.013032</rdf:li>\n             <rdf:li>d 0.934931 0.009965</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.500000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"1.000000\"\n            crs:Radius=\"0.182352\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.473073 0.058637</rdf:li>\n             <rdf:li>d 0.509159 0.066563</rdf:li>\n             <rdf:li>d 0.545517 0.070856</rdf:li>\n             <rdf:li>d 0.581888 0.074900</rdf:li>\n             <rdf:li>d 0.618258 0.078945</rdf:li>\n             <rdf:li>d 0.654728 0.079100</rdf:li>\n             <rdf:li>d 0.691196 0.079777</rdf:li>\n             <rdf:li>d 0.727664 0.080454</rdf:li>\n             <rdf:li>d 0.764103 0.078192</rdf:li>\n             <rdf:li>d 0.800529 0.075484</rdf:li>\n             <rdf:li>d 0.836916 0.071806</rdf:li>\n             <rdf:li>d 0.872929 0.063160</rdf:li>\n             <rdf:li>d 0.908306 0.049857</rdf:li>\n             <rdf:li>d 0.871911 0.046337</rdf:li>\n             <rdf:li>d 0.835576 0.041631</rdf:li>\n             <rdf:li>d 0.799283 0.036235</rdf:li>\n             <rdf:li>d 0.762977 0.031035</rdf:li>\n             <rdf:li>d 0.726672 0.025834</rdf:li>\n             <rdf:li>d 0.690291 0.022012</rdf:li>\n             <rdf:li>d 0.653936 0.017655</rdf:li>\n             <rdf:li>d 0.617549 0.013949</rdf:li>\n             <rdf:li>d 0.581296 0.007987</rdf:li>\n             <rdf:li>d 0.545947 -0.005481</rdf:li>\n             <rdf:li>d 0.509932 -0.014102</rdf:li>\n             <rdf:li>d 0.473544 -0.017792</rdf:li>\n             <rdf:li>d 0.437083 -0.018986</rdf:li>\n             <rdf:li>d 0.400621 -0.020151</rdf:li>\n             <rdf:li>d 0.364151 -0.020537</rdf:li>\n             <rdf:li>d 0.327738 -0.017465</rdf:li>\n             <rdf:li>d 0.291740 -0.008688</rdf:li>\n             <rdf:li>d 0.256063 0.002668</rdf:li>\n             <rdf:li>d 0.222379 0.023651</rdf:li>\n             <rdf:li>d 0.194899 0.059637</rdf:li>\n             <rdf:li>d 0.175065 0.105569</rdf:li>\n             <rdf:li>d 0.163052 0.157249</rdf:li>\n             <rdf:li>d 0.152142 0.209477</rdf:li>\n             <rdf:li>d 0.144429 0.262973</rdf:li>\n             <rdf:li>d 0.138253 0.316917</rdf:li>\n             <rdf:li>d 0.132826 0.371043</rdf:li>\n             <rdf:li>d 0.129462 0.425544</rdf:li>\n             <rdf:li>d 0.126065 0.480040</rdf:li>\n             <rdf:li>d 0.123594 0.534649</rdf:li>\n             <rdf:li>d 0.120902 0.589234</rdf:li>\n             <rdf:li>d 0.117445 0.643722</rdf:li>\n             <rdf:li>d 0.115414 0.698371</rdf:li>\n             <rdf:li>d 0.114510 0.753089</rdf:li>\n             <rdf:li>d 0.114116 0.807820</rdf:li>\n             <rdf:li>d 0.115028 0.862538</rdf:li>\n             <rdf:li>d 0.114233 0.917259</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:PaintBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n"
			}
		},
		DialogModes.NO
	);
	// Make
	jamEngine.jsonPlay
	(
		"'Mk  '",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'AdjL'":
						{
							"<class>": null
						}
					}
				]
			},
			"'Usng'":
			{
				"<object>":
				{
					"'AdjL'":
					{
						"'Type'":
						{
							"<object>":
							{
								"'BrgC'":
								{
									"useLegacy":
									{
										"<boolean>": false
									}
								}
							}
						}
					}
				}
			}
		},
		DialogModes.NO
	);
	// Make
	jamEngine.jsonPlay
	(
		"'Mk  '",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'AdjL'":
						{
							"<class>": null
						}
					}
				]
			},
			"'Usng'":
			{
				"<object>":
				{
					"'AdjL'":
					{
						"'Type'":
						{
							"<object>":
							{
								"'Crvs'":
								{
									"presetKind":
									{
										"<enumerated>":
										{
											"presetKindType": "presetKindDefault"
										}
									}
								}
							}
						}
					}
				}
			}
		},
		DialogModes.NO
	);
	// Make
	jamEngine.jsonPlay
	(
		"'Mk  '",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'AdjL'":
						{
							"<class>": null
						}
					}
				]
			},
			"'Usng'":
			{
				"<object>":
				{
					"'AdjL'":
					{
						"'Type'":
						{
							"<object>":
							{
								"'Exps'":
								{
									"presetKind":
									{
										"<enumerated>":
										{
											"presetKindType": "presetKindDefault"
										}
									},
									"'Exps'":
									{
										"<double>": 0
									},
									"'Ofst'":
									{
										"<double>": 0
									},
									"gammaCorrection":
									{
										"<double>": 1
									}
								}
							}
						}
					}
				}
			}
		},
		DialogModes.NO
	);
	// Make
	jamEngine.jsonPlay
	(
		"'Mk  '",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'AdjL'":
						{
							"<class>": null
						}
					}
				]
			},
			"'Usng'":
			{
				"<object>":
				{
					"'AdjL'":
					{
						"'Type'":
						{
							"<class>": "vibrance"
						}
					}
				}
			}
		},
		DialogModes.NO
	);
	// Make
	jamEngine.jsonPlay
	(
		"'Mk  '",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'AdjL'":
						{
							"<class>": null
						}
					}
				]
			},
			"'Usng'":
			{
				"<object>":
				{
					"'AdjL'":
					{
						"'Type'":
						{
							"<object>":
							{
								"'HStr'":
								{
									"presetKind":
									{
										"<enumerated>":
										{
											"presetKindType": "presetKindDefault"
										}
									},
									"'Clrz'":
									{
										"<boolean>": false
									}
								}
							}
						}
					}
				}
			}
		},
		DialogModes.NO
	);
	// Make
	jamEngine.jsonPlay
	(
		"'Mk  '",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'AdjL'":
						{
							"<class>": null
						}
					}
				]
			},
			"'Usng'":
			{
				"<object>":
				{
					"'AdjL'":
					{
						"'Type'":
						{
							"<object>":
							{
								"'SlcC'":
								{
									"presetKind":
									{
										"<enumerated>":
										{
											"presetKindType": "presetKindDefault"
										}
									}
								}
							}
						}
					}
				}
			}
		},
		DialogModes.NO
	);
	// Select
	jamEngine.jsonPlay
	(
		"'slct'",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'Lyr '":
						{
							"<name>": "Background copy"
						}
					}
				]
			},
			"selectionModifier":
			{
				"<enumerated>":
				{
					"selectionModifierType": "addToSelectionContinuous"
				}
			},
			"'MkVs'":
			{
				"<boolean>": false
			},
			"'LyrI'":
			{
				"<list>":
				[
					{
						"<integer>": 83
					},
					{
						"<integer>": 84
					},
					{
						"<integer>": 85
					},
					{
						"<integer>": 86
					},
					{
						"<integer>": 87
					},
					{
						"<integer>": 88
					},
					{
						"<integer>": 89
					}
				]
			}
		},
		DialogModes.NO
	);
	// Make
	jamEngine.jsonPlay
	(
		"'Mk  '",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"layerSection":
						{
							"<class>": null
						}
					}
				]
			},
			"'From'":
			{
				"<reference>":
				[
					{
						"'Lyr '":
						{
							"<enumerated>":
							{
								"'Ordn'": "'Trgt'"
							}
						}
					}
				]
			},
			"layerSectionStart":
			{
				"<integer>": 202
			},
			"layerSectionEnd":
			{
				"<integer>": 203
			},
			"'Nm  '":
			{
				"<string>": "Group 1"
			}
		},
		DialogModes.NO
	);
	// Set
	jamEngine.jsonPlay
	(
		"'setd'",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'Lyr '":
						{
							"<enumerated>":
							{
								"'Ordn'": "'Trgt'"
							}
						}
					}
				]
			},
			"'T   '":
			{
				"<object>":
				{
					"'Lyr '":
					{
						"'Nm  '":
						{
							"<string>": "Tùng Nguyễn Studio"
						}
					}
				}
			}
		},
		DialogModes.NO
	);
	// Set
	jamEngine.jsonPlay
	(
		"'setd'",
		{
			"'null'":
			{
				"<reference>":
				[
					{
						"'Lyr '":
						{
							"<enumerated>":
							{
								"'Ordn'": "'Trgt'"
							}
						}
					}
				]
			},
			"'T   '":
			{
				"<object>":
				{
					"'Lyr '":
					{
						"'Nm  '":
						{
							"<string>": "NT Studio"
						}
					}
				}
			}
		},
		DialogModes.NO
	);
}
catch (e)
{
	if (e.number !== 8007)  // Not a user cancel error
	{
		try
		{
			jamEngine.jsonPlay
			(
				"'Stop'",
				{
					"'Msge'":
					{
						"<string>": e.message.replace (/^.*\n- /, "")
					}
				},
				DialogModes.ALL
			);
		}
		catch (e)
		{
		}
	}
}
