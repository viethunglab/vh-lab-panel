// Application: C:\Program Files\Adobe\Adobe Photoshop CC 2019 (20.0.0)
// Date: 2021-11-25T13:31:42-08:00
// Actions file: C:\Users\NT Studio\Desktop\NT.atn
// Action set: NT

// jamEngine.jsxinc v4.4.4 (minified)
if(typeof jamEngine!=='object') {var jamEngine={};(function() {var that;jamEngine.meaningfulIds=false;jamEngine.parseFriendly=false;jamEngine.displayDialogs=DialogModes.ERROR;var conflictingStringIdStrs={"'Algn'":["align","alignment"],"'AntA'":["antiAlias","antiAliasedPICTAcquire"],"'BckL'":["backgroundLayer","backgroundLevel"],"'BlcG'":["blackGenerationType","blackGenerationCurve"],"'BlcL'":["blackLevel","blackLimit"],"'Blks'":["blacks","blocks"],"'BlrM'":["blurMethod","blurMore"],"'BrgC'":["brightnessEvent","brightnessContrast"],"'BrsD'":["brushDetail","brushesDefine"],"'Brsh'":["brush","brushes"],"'Clcl'":["calculation","calculations"],"'ClrP'":["colorPalette","coloredPencil"],"'Cnst'":["constant","constrain"],"'CntC'":["centerCropMarks","conteCrayon"],"'Cntr'":["center","contrast"],"'CrtD'":["createDroplet","createDuplicate"],"'CstP'":["customPalette","customPhosphors"],"'Cstm'":["custom","customPattern"],"'Drkn'":["darken","darkness"],"'Dstr'":["distort","distortion","distribute","distribution"],"'Dstt'":["desaturate","destWhiteMax"],"'FlIn'":["fileInfo","fillInverse"],"'Gd  '":["good","guide"],"'GnrP'":["generalPreferences","generalPrefs","preferencesClass"],"'GrSt'":["grainStippled","graySetup"],"'Grdn'":["gradientClassEvent","gridMinor"],"'Grn '":["grain","green"],"'Grns'":["graininess","greens"],"'HstP'":["historyPreferences","historyPrefs"],"'HstS'":["historyState","historyStateSourceType"],"'ImgP'":["imageCachePreferences","imagePoint"],"'In  '":["in","stampIn"],"'IntW'":["interfaceWhite","intersectWith"],"'Intr'":["interfaceIconFrameDimmed","interlace","interpolation","intersect"],"'JPEG'":["JPEG","JPEGFormat"],"'LghD'":["lightDirection","lightDirectional"],"'LghO'":["lightOmni","lightenOnly"],"'LghS'":["lightSource","lightSpot"],"'Lns '":["lens","lines"],"'Mgnt'":["magenta","magentas"],"'MrgL'":["mergeLayers","mergedLayers"],"'Mxm '":["maximum","maximumQuality"],"'NTSC'":["NTSC","NTSCColors"],"'NmbL'":["numberOfLayers","numberOfLevels"],"'PlgP'":["pluginPicker","pluginPrefs"],"'Pncl'":["pencilEraser","pencilWidth"],"'Pnt '":["paint","point"],"'Prsp'":["perspective","perspectiveIndex"],"'PrvM'":["previewMacThumbnail","previewMagenta"],"'Pstr'":["posterization","posterize"],"'RGBS'":["RGBSetup","RGBSetupSource"],"'Rds '":["radius","reds"],"'ScrD'":["scratchDisks","screenDot"],"'ShdI'":["shadingIntensity","shadowIntensity"],"'ShpC'":["shapeCurveType","shapingCurve"],"'ShrE'":["sharpenEdges","shearEd"],"'Shrp'":["sharpen","sharpness"],"'SplC'":["splitChannels","supplementalCategories"],"'Spot'":["spot","spotColor"],"'SprS'":["separationSetup","sprayedStrokes"],"'StrL'":["strokeLength","strokeLocation"],"'Strt'":["saturation","start"],"'TEXT'":["char","textType"],"'TIFF'":["TIFF","TIFFFormat"],"'TglO'":["toggleOptionsPalette","toggleOthers"],"'TrnG'":["transparencyGamutPreferences","transparencyGrid","transparencyGridSize"],"'TrnS'":["transferSpec","transparencyShape","transparencyStop"],"'Trns'":["transparency","transparent"],"'TxtC'":["textClickPoint","textureCoverage"],"'TxtF'":["textureFile","textureFill"],"'UsrM'":["userMaskEnabled","userMaskOptions"],"'c@#^'":["inherits","pInherits"],"'comp'":["comp","sInt64"],"'doub'":["floatType","IEEE64BitFloatingPoint","longFloat"],"'long'":["integer","longInteger","sInt32"],"'magn'":["magnitude","uInt32"],"'null'":["null","target"],"'shor'":["sInt16","sMInt","shortInteger"],"'sing'":["IEEE32BitFloatingPoint","sMFloat","shortFloat"]};jamEngine.getConflictingStringIdStrs=function(charIdStr) {return conflictingStringIdStrs[charIdStr]||null;};jamEngine.uniIdStrToId=function(uniIdStr) {var id=0;if(typeof uniIdStr==='string') {if((uniIdStr.length===(1+4+1))&&(uniIdStr.charAt(0)==="'")&&(uniIdStr.charAt(5)==="'")) {id=app.charIDToTypeID(uniIdStr.substring(1,5));} else {id=app.stringIDToTypeID(uniIdStr);}} return id;};var smallestHashValue=app.charIDToTypeID("    ");jamEngine.idToUniIdStrs=function(id) {var charIdStr="";var stringIdStr=app.typeIDToStringID(id);if(id>=smallestHashValue) {charIdStr="'"+app.typeIDToCharID(id)+"'";if(stringIdStr!=="") {if(charIdStr in conflictingStringIdStrs) {stringIdStr=conflictingStringIdStrs[charIdStr];}}} return[charIdStr,stringIdStr];};jamEngine.equivalentUniIdStrs=function(uniIdStr1,uniIdStr2) {return this.uniIdStrToId(uniIdStr1)===this.uniIdStrToId(uniIdStr2);};function putInReference(ref,containers) {if(containers.constructor===Array) {var count=containers.length;for(var i=0;i<count;i++) {var container=that.parseCompact(containers[i]);var desiredClassId=that.uniIdStrToId(container[0]);var typedValue=that.parseCompact(container[1]);var form=typedValue[0];var value=typedValue[1];switch(form) {case"<class>":ref.putClass(desiredClassId);break;case"<enumerated>":var enumerated=that.parseCompact(value);ref.putEnumerated(desiredClassId,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<identifier>":ref.putIdentifier(desiredClassId,value);break;case"<index>":ref.putIndex(desiredClassId,value);break;case"<name>":ref.putName(desiredClassId,value);break;case"<offset>":ref.putOffset(desiredClassId,value);break;case"<property>":ref.putProperty(desiredClassId,that.uniIdStrToId(value));break;default:throw new Error("[jamEngine putInReference] Unknown reference form: "+form);break;}}} else {throw new Error("[jamEngine putInReference] JavaScript array expected");}} function putInList(list,items) {if(items.constructor===Array) {var count=items.length;for(var i=0;i<count;i++) {var item=that.parseCompact(items[i]);var type=item[0];var value=item[1];switch(type) {case"<boolean>":list.putBoolean(value);break;case"<class>":list.putClass(that.uniIdStrToId(value));break;case"<data>":list.putData(value);break;case"<double>":list.putDouble(value);break;case"<enumerated>":var enumerated=that.parseCompact(value);list.putEnumerated(that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":list.putInteger(value);break;case"<largeInteger>":list.putLargeInteger(value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);list.putList(actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);list.putObject(that.uniIdStrToId(object[0]),actionDescriptor);} else {list.putClass(that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);list.putPath(fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);list.putReference(actionReference);break;case"<string>":list.putString(value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);list.putUnitDouble(that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInList] Unknown list type: "+type);break;}}} else {throw new Error("[jamEngine putInList] JavaScript array expected");}} function putInDescriptor(desc,members) {if(members.constructor===Object) {for(var key in members) {if(members.hasOwnProperty(key)) {var keyID=that.uniIdStrToId(key);var member=that.parseCompact(members[key]);var type=member[0];var value=member[1];switch(type) {case"<boolean>":desc.putBoolean(keyID,value);break;case"<class>":desc.putClass(keyID,that.uniIdStrToId(value));break;case"<data>":desc.putData(keyID,value);break;case"<double>":desc.putDouble(keyID,value);break;case"<enumerated>":var enumerated=that.parseCompact(value);desc.putEnumerated(keyID,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":desc.putInteger(keyID,value);break;case"<largeInteger>":desc.putLargeInteger(keyID,value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);desc.putList(keyID,actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);desc.putObject(keyID,that.uniIdStrToId(object[0]),actionDescriptor);} else {desc.putClass(keyID,that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);desc.putPath(keyID,fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);desc.putReference(keyID,actionReference);break;case"<string>":desc.putString(keyID,value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);desc.putUnitDouble(keyID,that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInDescriptor] Unknown descriptor type: "+type);break;}}}} else {throw new Error("[jamEngine putInDescriptor] JavaScript object expected");}} var contextRules={"'Algn'":{"<classKey>":{"bevelEmboss":"align","frameFX":"align","gradientFill":"align","gradientLayer":"align","patternFill":"align","patternLayer":"align"},"<event>":"align","<key>":"alignment"},"'AntA'":{"<class>":"antiAliasedPICTAcquire","<key>":"antiAlias"},"'BckL'":{"<class>":"backgroundLayer","<key>":"backgroundLevel"},"'BlcG'":{"<enumType>":"blackGenerationType","<key>":"blackGenerationCurve"},"'BlcL'":{"<classKey>":{"'GEfc'":"blackLevel","CMYKSetup":"blackLimit"},"<eventKey>":{"reticulation":"blackLevel"}},"'Blks'":{"<typeValue>":{"colors":"blacks","extrudeType":"blocks"}},"'BlrM'":{"<enumType>":"blurMethod","<event>":"blurMore","<key>":"blurMethod"},"'BrgC'":{"<class>":"brightnessContrast","<event>":"brightnessContrast"},"'BrsD'":{"<enumValue>":"brushesDefine","<key>":"brushDetail"},"'Brsh'":{"<class>":"brush","<key>":"brushes"},"'Clcl'":{"<class>":"calculation","<enumValue>":"calculations","<key>":"calculation"},"'ClrP'":{"<typeValue>":{"'GEft'":"coloredPencil"},"<enumType>":"colorPalette","<event>":"coloredPencil"},"'Cnst'":{"<classKey>":{"channelMatrix":"constant"},"<unknown>":"constrain"},"'CntC'":{"<typeValue>":{"'GEft'":"conteCrayon"},"<event>":"conteCrayon","<key>":"centerCropMarks"},"'Cntr'":{"<classKey>":{"'GEfc'":"contrast","brightnessContrast":"contrast","document":"center","polygon":"center","quadrilateral":"center"},"<eventKey>":{"adaptCorrect":"contrast","brightnessEvent":"contrast","grain":"contrast","halftoneScreen":"contrast","sumie":"contrast","tornEdges":"contrast","waterPaper":"contrast"},"<enumValue>":"center"},"'CrtD'":{"<enumValue>":"createDuplicate","<event>":"createDroplet"},"'CstP'":{"<class>":"customPhosphors","<key>":"customPalette"},"'Cstm'":{"<enumValue>":"customPattern","<event>":"custom","<key>":"custom"},"'Drkn'":{"<enumValue>":"darken","<key>":"darkness"},"'Dstr'":{"<classKey>":{"'GEfc'":"distortion"},"<eventKey>":{"glass":"distortion","addNoise":"distribution"},"<enumType>":"distribution","<enumValue>":"distort","<event>":"distribute"},"'Dstt'":{"<enumValue>":"desaturate","<event>":"desaturate","<key>":"destWhiteMax"},"'FlIn'":{"<typeValue>":{"fillColor":"fillInverse","menuItemType":"fileInfo"},"<class>":"fileInfo","<key>":"fileInfo"},"'Gd  '":{"<class>":"guide","<enumValue>":"good"},"'GnrP'":{"<class>":"preferencesClass","<enumValue>":"generalPreferences","<key>":"generalPrefs"},"'GrSt'":{"<class>":"graySetup","<enumValue>":"grainStippled","<key>":"graySetup"},"'Grdn'":{"<class>":"gradientClassEvent","<event>":"gradientClassEvent","<key>":"gridMinor"},"'Grn '":{"<typeValue>":{"'GEft'":"grain"},"<classKey>":{"'GEfc'":"grain","RGBColor":"green","blackAndWhite":"green","channelMatrix":"green","channelMixer":"green"},"<eventKey>":{"blackAndWhite":"green","channelMixer":"green","filmGrain":"grain"},"<enumValue>":"green","<event>":"grain"},"'Grns'":{"<enumValue>":"greens","<key>":"graininess"},"'HstP'":{"<enumValue>":"historyPreferences","<key>":"historyPrefs"},"'HstS'":{"<class>":"historyState","<enumType>":"historyStateSourceType"},"'ImgP'":{"<class>":"imagePoint","<enumValue>":"imageCachePreferences"},"'In  '":{"<enumValue>":"stampIn","<key>":"in"},"'IntW'":{"<event>":"intersectWith","<key>":"interfaceWhite"},"'Intr'":{"<typeValue>":{"shapeOperation":"intersect"},"<classKey>":{"GIFFormat":"interlace","SaveForWeb":"interlace","application":"interfaceIconFrameDimmed","computedBrush":"interpolation","dBrush":"interpolation","gradientClassEvent":"interpolation","photoshopEPSFormat":"interpolation","sampledBrush":"interpolation"},"<eventKey>":{"convertMode":"interpolation","imageSize":"interpolation","transform":"interpolation"},"<event>":"intersect"},"'JPEG'":{"<class>":"JPEGFormat","<enumValue>":"JPEG"},"'LghD'":{"<enumType>":"lightDirection","<enumValue>":"lightDirectional","<key>":"lightDirection"},"'LghO'":{"<typeValue>":{"diffuseMode":"lightenOnly","lightType":"lightOmni"}},"'LghS'":{"<class>":"lightSource","<enumValue>":"lightSpot","<key>":"lightSource"},"'Lns '":{"<enumType>":"lens","<enumValue>":"lines","<key>":"lens"},"'Mgnt'":{"<typeValue>":{"channel":"magenta","colors":"magentas","guideGridColor":"magenta"},"<key>":"magenta"},"'MrgL'":{"<enumValue>":"mergedLayers","<event>":"mergeLayers"},"'Mxm '":{"<enumValue>":"maximumQuality","<event>":"maximum","<key>":"maximum"},"'NTSC'":{"<enumValue>":"NTSC","<event>":"NTSCColors"},"'NmbL'":{"<classKey>":{"'GEfc'":"numberOfLevels","document":"numberOfLayers"},"<eventKey>":{"cutout":"numberOfLevels"}},"'PlgP'":{"<class>":"pluginPrefs","<enumValue>":"pluginPicker","<key>":"pluginPrefs"},"'Pncl'":{"<enumValue>":"pencilEraser","<key>":"pencilWidth"},"'Pnt '":{"<typeValue>":{"textType":"point"},"<class>":"point","<event>":"paint"},"'Prsp'":{"<enumValue>":"perspective","<key>":"perspectiveIndex"},"'PrvM'":{"<enumValue>":"previewMagenta","<key>":"previewMacThumbnail"},"'Pstr'":{"<class>":"posterize","<event>":"posterize","<key>":"posterization"},"'RGBS'":{"<enumType>":"RGBSetupSource","<key>":"RGBSetup"},"'Rds '":{"<enumValue>":"reds","<key>":"radius"},"'ScrD'":{"<enumValue>":"screenDot","<key>":"scratchDisks"},"'ShdI'":{"<classKey>":{"'GEfc'":"shadowIntensity"},"<eventKey>":{"watercolor":"shadowIntensity"},"<unknown>":"shadingIntensity"},"'ShpC'":{"<classKey>":{"application":"shapingCurve"},"<class>":"shapingCurve","<key>":"shapeCurveType"},"'ShrE'":{"<event>":"sharpenEdges","<key>":"shearEd"},"'Shrp'":{"<event>":"sharpen","<key>":"sharpness"},"'SplC'":{"<event>":"splitChannels","<key>":"supplementalCategories"},"'Spot'":{"<enumValue>":"spotColor","<key>":"spot"},"'SprS'":{"<typeValue>":{"'GEft'":"sprayedStrokes"},"<enumValue>":"separationSetup","<event>":"sprayedStrokes"},"'StrL'":{"<enumType>":"strokeLocation","<key>":"strokeLength"},"'Strt'":{"<classKey>":{"currentToolOptions":"saturation","fileNamingRules":"start","HSBColorClass":"saturation","hueSatAdjustment":"saturation","hueSatAdjustmentV2":"saturation","lineClass":"start","range":"start","vibrance":"saturation"},"<eventKey>":{"replaceColor":"saturation","variations":"saturation","vibrance":"saturation"},"<enumValue>":"saturation"},"'TEXT'":{"<enumType>":"textType","<key>":"textType"},"'TIFF'":{"<class>":"TIFFFormat","<enumValue>":"TIFF"},"'TglO'":{"<enumValue>":"toggleOptionsPalette","<key>":"toggleOthers"},"'TrnG'":{"<classKey>":{"application":"transparencyGrid","transparencyPrefs":"transparencyGridSize"},"<enumType>":"transparencyGridSize","<enumValue>":"transparencyGamutPreferences"},"'TrnS'":{"<classKey>":{"bevelEmboss":"transparencyShape","dropShadow":"transparencyShape","innerGlow":"transparencyShape","innerShadow":"transparencyShape","outerGlow":"transparencyShape"},"<class>":"transparencyStop","<unknown>":"transferSpec"},"'Trns'":{"<enumValue>":"transparent","<key>":"transparency"},"'TxtC'":{"<classKey>":{"'GEfc'":"textureCoverage","textLayer":"textClickPoint"},"<eventKey>":{"underpainting":"textureCoverage"}},"'TxtF'":{"<event>":"textureFill","<key>":"textureFile"},"'UsrM'":{"<enumType>":"userMaskOptions","<key>":"userMaskEnabled"},"'null'":{"<class>":"null","<enumValue>":"null","<event>":"null","<key>":"target"}};function getFromId(context,parentContext) {var uniIdStr;var kind=context[0];var id=context[1];if(id<smallestHashValue) {uniIdStr=app.typeIDToStringID(id);} else {uniIdStr="'"+app.typeIDToCharID(id)+"'";if(that.meaningfulIds) {if(uniIdStr in contextRules) {function resolveIdStr(candidates) {var idStr="";for(var parentString in candidates) {if(candidates.hasOwnProperty(parentString)) {if(parentContext[1]===that.uniIdStrToId(parentString)) {idStr=candidates[parentString];break;}}} return idStr;} var resolvedIdStr="";var rule=contextRules[uniIdStr];if(parentContext) {switch(kind) {case"<key>":if((parentContext[0]==="<class>")&&("<classKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<classKey>"]);} else if((parentContext[0]==="<event>")&&("<eventKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<eventKey>"]);} break;case"<enumValue>":if((parentContext[0]==="<enumType>")&&("<typeValue>"in rule)) {resolvedIdStr=resolveIdStr(rule["<typeValue>"]);} break;}} if(resolvedIdStr!=="") {uniIdStr=resolvedIdStr;} else if(kind in rule) {uniIdStr=rule[kind];}} else {var stringIDStr=app.typeIDToStringID(id);if(stringIDStr!=="") {uniIdStr=stringIDStr;}}}} return uniIdStr;} var incompatiblePlatformPath="";var getEventId=app.stringIDToTypeID("get");var targetKeyId=app.stringIDToTypeID("target");var propertyClassId=app.stringIDToTypeID("property");function getFromReference(ref) {var propertyId=0;var arr=[];do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(propertyId!==0) {var propertyCompact=that.buildCompact("<property>",getFromId(["<key>",propertyId],["<class>",desiredClassId]));arr.push(that.buildCompact(getFromId(["<class>",propertyClassId]),propertyCompact));propertyId=0;} var desiredCompact;var aFormID=ref.getForm();switch(aFormID) {case ReferenceFormType.CLASSTYPE:desiredCompact=that.buildCompact("<class>",null);break;case ReferenceFormType.ENUMERATED:var enumTypeContext=["<enumType>",ref.getEnumeratedType()];var enumValueContext=["<enumValue>",ref.getEnumeratedValue()];desiredCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case ReferenceFormType.IDENTIFIER:desiredCompact=that.buildCompact("<identifier>",ref.getIdentifier());break;case ReferenceFormType.INDEX:desiredCompact=that.buildCompact("<index>",ref.getIndex());break;case ReferenceFormType.NAME:desiredCompact=that.buildCompact("<name>",ref.getName());break;case ReferenceFormType.OFFSET:desiredCompact=that.buildCompact("<offset>",ref.getOffset());break;case ReferenceFormType.PROPERTY:if(desiredClassId===propertyClassId) {propertyId=ref.getProperty();} else {desiredCompact=that.buildCompact("<property>",getFromId(["<key>",ref.getProperty()],["<class>",desiredClassId]));} break;default:throw new Error("[jamEngine getFromReference] Unknown reference form type: "+aFormID);break;} if(desiredClassId!==propertyClassId) {arr.push(that.buildCompact(getFromId(["<class>",desiredClassId]),desiredCompact));} ref=ref.getContainer();} while(ref);return arr;} function getFromList(list) {var arr=[];var itemCount=list.count;for(var itemIndex=0;itemIndex<itemCount;itemIndex++) {var itemCompact;var typeID;try{typeID=list.getType(itemIndex);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:itemCompact=that.buildCompact("<boolean>",list.getBoolean(itemIndex));break;case DescValueType.CLASSTYPE:itemCompact=that.buildCompact("<class>",getFromId(["<class>",list.getClass(itemIndex)]));break;case DescValueType.DOUBLETYPE:itemCompact=that.buildCompact("<double>",list.getDouble(itemIndex));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",list.getEnumerationType(itemIndex)];var enumValueContext=["<enumValue>",list.getEnumerationValue(itemIndex)];itemCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:itemCompact=that.buildCompact("<integer>",list.getInteger(itemIndex));break;case DescValueType.LISTTYPE:itemCompact=that.buildCompact("<list>",getFromList(list.getList(itemIndex)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",list.getObjectType(itemIndex)];var objectValue=list.getObjectValue(itemIndex);itemCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=list.getPath(itemIndex);itemCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {itemCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:itemCompact=that.buildCompact("<reference>",getFromReference(list.getReference(itemIndex)));break;case DescValueType.STRINGTYPE:itemCompact=that.buildCompact("<string>",list.getString(itemIndex));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",list.getUnitDoubleType(itemIndex)];var doubleValue=list.getUnitDoubleValue(itemIndex);itemCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {itemCompact=that.buildCompact("<data>",list.getData(itemIndex));} else if(isLargeIntegerType) {itemCompact=that.buildCompact("<largeInteger>",list.getLargeInteger(itemIndex));} else {throw new Error("[jamEngine getFromList] Unknown descriptor value type: "+typeID);} break;} arr[itemIndex]=itemCompact;} return arr;} function getFromDescriptor(desc,parentContext) {if(desc) {var obj={};var keyCount;try{keyCount=desc.count;}catch(e){return null;} for(var keyIndex=0;keyIndex<keyCount;keyIndex++) {var keyID=desc.getKey(keyIndex);var keyString=getFromId(["<key>",keyID],parentContext);var keyCompact;var typeID;try{typeID=desc.getType(keyID);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:keyCompact=that.buildCompact("<boolean>",desc.getBoolean(keyID));break;case DescValueType.CLASSTYPE:keyCompact=that.buildCompact("<class>",getFromId(["<class>",desc.getClass(keyID)]));break;case DescValueType.DOUBLETYPE:keyCompact=that.buildCompact("<double>",desc.getDouble(keyID));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",desc.getEnumerationType(keyID)];var enumValueContext=["<enumValue>",desc.getEnumerationValue(keyID)];keyCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:keyCompact=that.buildCompact("<integer>",desc.getInteger(keyID));break;case DescValueType.LISTTYPE:keyCompact=that.buildCompact("<list>",getFromList(desc.getList(keyID)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",desc.getObjectType(keyID)];var objectValue=desc.getObjectValue(keyID);keyCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=desc.getPath(keyID);keyCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {keyCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:keyCompact=that.buildCompact("<reference>",getFromReference(desc.getReference(keyID)));break;case DescValueType.STRINGTYPE:keyCompact=that.buildCompact("<string>",desc.getString(keyID));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",desc.getUnitDoubleType(keyID)];var doubleValue=desc.getUnitDoubleValue(keyID);keyCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {keyCompact=that.buildCompact("<data>",desc.getData(keyID));} else if(isLargeIntegerType) {keyCompact=that.buildCompact("<largeInteger>",desc.getLargeInteger(keyID));} else {throw new Error("[jamEngine getFromDescriptor] Unknown descriptor value type: "+typeID);} break;} obj[keyString]=keyCompact;} return obj;} else {return null;}} jamEngine.jsonToActionDescriptor=function(descriptorObj) {that=this;var actionDescriptor;if(descriptorObj) {actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,descriptorObj);} return actionDescriptor;};jamEngine.jsonToActionReference=function(referenceArr) {that=this;var actionReference;if(referenceArr) {actionReference=new ActionReference();putInReference(actionReference,referenceArr);} return actionReference;};jamEngine.eventIdAndActionDescriptorToJson=function(eventId,actionDescriptor) {that=this;var eventIdContext=["<event>",eventId];return{"<event>":getFromId(eventIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,eventIdContext)};};jamEngine.classIdAndActionDescriptorToJson=function(classId,actionDescriptor) {that=this;var classIdContext=["<class>",classId];return{"<class>":getFromId(classIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,classIdContext)};};jamEngine.actionReferenceToJson=function(actionReference) {that=this;return getFromReference(actionReference);};function getReferenceClassId(ref) {classId=0;do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(desiredClassId!==propertyClassId) {classId=desiredClassId;break;} ref=ref.getContainer();} while(ref);return classId;} jamEngine.jsonPlay=function(eventUniIdStr,descriptorObj,displayDialogs) {var eventId=this.uniIdStrToId(eventUniIdStr);var desc=this.jsonToActionDescriptor(descriptorObj);var parentContext;if(eventId===getEventId) {var ref=desc.getReference(targetKeyId);parentContext=["<class>",getReferenceClassId(ref)];} else {parentContext=["<event>",eventId];} return getFromDescriptor(app.executeAction(eventId,desc,displayDialogs||this.displayDialogs),parentContext);};jamEngine.jsonGet=function(referenceArr) {var ref=this.jsonToActionReference(referenceArr);return getFromDescriptor(app.executeActionGet(ref),["<class>",getReferenceClassId(ref)]);};jamEngine.normalizeJsonItem=function(item,options) {function normalizeItem(item) {var explicit=that.parseCompact(item);var type=explicit[0];var value=explicit[1];var normalizedValue;switch(type) {case"<boolean>":case"<data>":case"<double>":case"<identifier>":case"<index>":case"<integer>":case"<largeInteger>":case"<name>":case"<offset>":case"<path>":case"<string>":normalizedValue=value;break;case"<class>":normalizedValue=value&&getFromId(["<class>",that.uniIdStrToId(value)]);break;case"<enumerated>":var enumerated=that.parseCompact(value);var enumTypeContext=["<enumType>",that.uniIdStrToId(enumerated[0])];var enumValueContext=["<enumValue>",that.uniIdStrToId(enumerated[1])];normalizedValue=that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext));break;case"<list>":normalizedValue=[];for(var i=0;i<value.length;i++) {normalizedValue.push(normalizeItem(value[i]));} break;case"<object>":var object=that.parseCompact(value);var objectClassContext=["<class>",that.uniIdStrToId(object[0])];var objectDescriptor=object[1];var normalizedDescriptor;if(objectDescriptor===null) {normalizedDescriptor=null;} else {normalizedDescriptor={};for(var key in objectDescriptor) {if(objectDescriptor.hasOwnProperty(key)) {var objectKeyContext=["<key>",that.uniIdStrToId(key)];normalizedDescriptor[getFromId(objectKeyContext,objectClassContext)]=normalizeItem(objectDescriptor[key]);}}} normalizedValue=that.buildCompact(getFromId(objectClassContext),normalizedDescriptor);break;case"<property>":normalizedValue=getFromId(["<key>",that.uniIdStrToId(value)]);break;case"<reference>":normalizedValue=[];for(var i=0;i<value.length;i++) {var container=that.parseCompact(value[i]);normalizedValue.push(that.buildCompact(getFromId(["<class>",that.uniIdStrToId(container[0])]),normalizeItem(container[1])));} break;case"<unitDouble>":var unitDouble=that.parseCompact(value);var unitTypeContext=["<unit>",that.uniIdStrToId(unitDouble[0])];normalizedValue=that.buildCompact(getFromId(unitTypeContext),unitDouble[1]);break;default:throw new Error("[jamEngine.normalizeJsonItem] Unknown item type: "+type);break;} return that.buildCompact(type,normalizedValue);} that=this;var saveMeaningfulIds=this.meaningfulIds;var saveParseFriendly=this.parseFriendly;if(options&&(options.constructor===Object)) {if(typeof options.meaningfulIds!=='undefined') {this.meaningfulIds=options.meaningfulIds;} if(typeof options.parseFriendly!=='undefined') {this.parseFriendly=options.parseFriendly;}} var normalizedItem=normalizeItem(item);this.meaningfulIds=saveMeaningfulIds;this.parseFriendly=saveParseFriendly;return normalizedItem;};function simplifyRef(ref) {var simplifiedRef=[];for(var i=0;i<ref.length;i++) {var element=ref[i];var simplifiedElement={};var desiredClass=element[0];var form=element[1][0];var value=element[1][1];switch(form) {case"<class>":case"<identifier>":case"<index>":case"<name>":case"<offset>":case"<property":simplifiedElement[desiredClass]=value;break;case"<enumerated>":simplifiedElement[desiredClass]=value[1];break;default:throw new Error("[jamEngine simplifyRef] Unexpected element form: "+form);break;} simplifiedRef.push(simplifiedElement);} return simplifiedRef;} function simplifyItem(item,hook) {var simplifiedItem;var type=item[0];var value=item[1];switch(type) {case"<boolean>":case"<class>":case"<data>":case"<double>":case"<integer>":case"<largeInteger>":case"<path>":case"<string>":simplifiedItem=value;break;case"<list>":simplifiedItem=simplifyList(value,hook);break;case"<enumerated>":case"<unitDouble>":simplifiedItem=value[1];break;case"<object>":simplifiedItem=simplifyDesc(value[1],hook);break;case"<reference>":simplifiedItem=simplifyRef(value);break;default:throw new Error("[jamEngine simplifyItem] Unexpected item type: "+type);break;} return simplifiedItem;} function simplifyList(list,hook) {var simplifiedList=[];for(var i=0;i<list.length;i++) {simplifiedList.push(simplifyItem(list[i],hook));} return simplifiedList;} function simplifyDesc(desc,hook) {var getDefaultValue=function(desc,key){return simplifyItem(desc[key],hook);};var simplifiedDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=undefined;if(typeof hook==='function') {value=hook(desc,key,getDefaultValue);} if(typeof value==='undefined') {value=simplifyItem(desc[key],hook);} simplifiedDesc[key]=value;}} return simplifiedDesc;} jamEngine.simplifyObject=function(object,hookFunction) {return simplifyDesc((this.normalizeJsonItem(object,{meaningfulIds:true,parseFriendly:true}))[1][1],hookFunction);};jamEngine.simplifyList=function(list,hookFunction) {return simplifyList((this.normalizeJsonItem(list,{meaningfulIds:true,parseFriendly:true}))[1],hookFunction);};jamEngine.parseCompact=function(compact) {var result=[];if(compact.constructor===Object) {var keys=[];for(var k in compact) {if(compact.hasOwnProperty(k)) {keys.push(k);}} if(keys.length===1) {result[0]=keys[0];result[1]=compact[keys[0]];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else if(compact.constructor===Array) {if(compact.length===2) {result[0]=compact[0];result[1]=compact[1];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else {throw new Error("[jamEngine.parseCompact] JavaScript object or array expected");} return result;};jamEngine.compactToExplicit=function(compact,typeKey,valueKey) {var explicit={};var typeValue=this.parseCompact(compact);explicit[typeKey||"<type>"]=typeValue[0];explicit[valueKey||"<value>"]=typeValue[1];return explicit;};jamEngine.buildCompact=function(type,value) {var compact;if(typeof type==='string') {if(this.parseFriendly) {compact=[type,value];} else {compact={};compact[type]=value;}} else {throw new Error("[jamEngine.buildCompact] String expected");} return compact;};jamEngine.explicitToCompact=function(explicit,typeKey,valueKey) {var compact;if(explicit.constructor===Object) {compact=this.buildCompact(explicit[typeKey||"<type>"],explicit[valueKey||"<value>"]);} else {throw new Error("[jamEngine.explicitToCompact] JavaScript object expected");} return compact;};for(var charIdStr in conflictingStringIdStrs) {if(conflictingStringIdStrs.hasOwnProperty(charIdStr)) {var stringIdStrs=conflictingStringIdStrs[charIdStr];for(var index=stringIdStrs.length-1;index>=0;index--) {var stringIdStr=stringIdStrs[index];if(!(app.charIDToTypeID(charIdStr.substring(1,5))===app.stringIDToTypeID(stringIdStr))) {stringIdStrs.splice(index,1);}} if(stringIdStrs.length<2) {delete conflictingStringIdStrs[charIdStr];}}} for(var charIdStr in contextRules) {if(contextRules.hasOwnProperty(charIdStr)) {if(charIdStr in conflictingStringIdStrs) {var rule=contextRules[charIdStr];for(var kind in rule) {if(rule.hasOwnProperty(kind)) {switch(kind) {case"<class>":case"<event>":case"<enumType>":case"<enumValue>":case"<key>":case"<unknown>":if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind]+"\" are not equivalent ID strings");} break;case"<classKey>":case"<eventKey>":case"<typeValue>":for(var parent in rule[kind]) {if(rule[kind].hasOwnProperty(parent)) {if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind][parent])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind][parent]+"\" are not equivalent ID strings");}}} break;}}}} else {delete contextRules[charIdStr];}}}}());}

jamEngine.meaningfulIds = false;
jamEngine.parseFriendly = false;

// Action “Màu Hàn 02”
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
				"<integer>": 11
			},
			"'Tint'":
			{
				"<integer>": 4
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
				"<integer>": 0
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
				"<integer>": 0
			},
			"'GHue'":
			{
				"<integer>": 0
			},
			"'GSat'":
			{
				"<integer>": 0
			},
			"'BHue'":
			{
				"<integer>": 0
			},
			"'BSat'":
			{
				"<integer>": 51
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
				"<integer>": 0
			},
			"'HA_A'":
			{
				"<integer>": 0
			},
			"'HA_B'":
			{
				"<integer>": 0
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
				"<integer>": -7
			},
			"'SA_Y'":
			{
				"<integer>": -19
			},
			"'SA_G'":
			{
				"<integer>": 0
			},
			"'SA_A'":
			{
				"<integer>": 0
			},
			"'SA_B'":
			{
				"<integer>": 0
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
				"<integer>": 28
			},
			"'LA_O'":
			{
				"<integer>": 35
			},
			"'LA_Y'":
			{
				"<integer>": 33
			},
			"'LA_G'":
			{
				"<integer>": -27
			},
			"'LA_A'":
			{
				"<integer>": 0
			},
			"'LA_B'":
			{
				"<integer>": 0
			},
			"'LA_P'":
			{
				"<integer>": 0
			},
			"'LA_M'":
			{
				"<integer>": 0
			},
			"'STSH'":
			{
				"<integer>": 168
			},
			"'STSS'":
			{
				"<integer>": 50
			},
			"'STHH'":
			{
				"<integer>": 360
			},
			"'STHS'":
			{
				"<integer>": 2
			},
			"'STB '":
			{
				"<integer>": 100
			},
			"'PC_S'":
			{
				"<integer>": 0
			},
			"'PC_D'":
			{
				"<integer>": 0
			},
			"'PC_L'":
			{
				"<integer>": 0
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
				"<double>": 0.5
			},
			"'ShpD'":
			{
				"<integer>": 0
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
				"<integer>": 1
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
				"<double>": -0.15
			},
			"'Cr12'":
			{
				"<integer>": 0
			},
			"'Hi12'":
			{
				"<integer>": -64
			},
			"'Sh12'":
			{
				"<integer>": -1
			},
			"'Wh12'":
			{
				"<integer>": -57
			},
			"'Bk12'":
			{
				"<integer>": 1
			},
			"'Cl12'":
			{
				"<integer>": 0
			},
			"'DfPA'":
			{
				"<integer>": 4
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
						"<integer>": 71
					},
					{
						"<integer>": 71
					},
					{
						"<integer>": 255
					},
					{
						"<integer>": 247
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
			"'LPSe'":
			{
				"<integer>": 0
			},
			"'LPNa'":
			{
				"<string>": "Adobe (Canon EF 85mm f/1.8 USM)"
			},
			"'LPFN'":
			{
				"<string>": "Canon EOS-1Ds Mark III (Canon EF 85mm f1.8 USM).lcp"
			},
			"'LPFP'":
			{
				"<string>": "8EF1AAEE1CFD3962658CF73731D10736"
			},
			"'LPDA'":
			{
				"<integer>": 100
			},
			"'LPCA'":
			{
				"<integer>": 100
			},
			"'LPVA'":
			{
				"<integer>": 100
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
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:PaintBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.062500\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.156240\"\n          crs:Flow=\"0.986301\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.156378</rdf:li>\n           <rdf:li>d 0.660387 0.310112</rdf:li>\n           <rdf:li>r 0.156200</rdf:li>\n           <rdf:li>d 0.653689 0.264071</rdf:li>\n           <rdf:li>r 0.156361</rdf:li>\n           <rdf:li>d 0.661908 0.309570</rdf:li>\n           <rdf:li>r 0.156437</rdf:li>\n           <rdf:li>d 0.672829 0.353863</rdf:li>\n           <rdf:li>r 0.156350</rdf:li>\n           <rdf:li>d 0.662853 0.309078</rdf:li>\n           <rdf:li>r 0.156190</rdf:li>\n           <rdf:li>d 0.654555 0.263611</rdf:li>\n           <rdf:li>r 0.156263</rdf:li>\n           <rdf:li>d 0.669955 0.304762</rdf:li>\n           <rdf:li>r 0.156275</rdf:li>\n           <rdf:li>d 0.685648 0.345692</rdf:li>\n           <rdf:li>r 0.156240</rdf:li>\n           <rdf:li>d 0.700678 0.387170</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.062500\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.156417\"\n          crs:Flow=\"0.986301\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.156348</rdf:li>\n           <rdf:li>d 0.684863 0.364403</rdf:li>\n           <rdf:li>r 0.156403</rdf:li>\n           <rdf:li>d 0.665654 0.326992</rdf:li>\n           <rdf:li>r 0.156399</rdf:li>\n           <rdf:li>d 0.646569 0.289419</rdf:li>\n           <rdf:li>r 0.156278</rdf:li>\n           <rdf:li>d 0.631946 0.247644</rdf:li>\n           <rdf:li>r 0.156351</rdf:li>\n           <rdf:li>d 0.650166 0.286132</rdf:li>\n           <rdf:li>r 0.156385</rdf:li>\n           <rdf:li>d 0.667104 0.325945</rdf:li>\n           <rdf:li>r 0.156417</rdf:li>\n           <rdf:li>d 0.679755 0.369205</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.062500\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.182845\"\n          crs:Flow=\"0.986301\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.183208</rdf:li>\n           <rdf:li>d 0.668671 0.381822</rdf:li>\n           <rdf:li>r 0.183065</rdf:li>\n           <rdf:li>d 0.661913 0.327452</rdf:li>\n           <rdf:li>r 0.182845</rdf:li>\n           <rdf:li>d 0.654687 0.273317</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.087500\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.182771\"\n          crs:Flow=\"0.986301\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.183338</rdf:li>\n           <rdf:li>d 0.639546 0.337953</rdf:li>\n           <rdf:li>r 0.183036</rdf:li>\n           <rdf:li>d 0.640460 0.282797</rdf:li>\n           <rdf:li>r 0.183057</rdf:li>\n           <rdf:li>d 0.662540 0.327108</rdf:li>\n           <rdf:li>r 0.183072</rdf:li>\n           <rdf:li>d 0.679079 0.376562</rdf:li>\n           <rdf:li>r 0.182963</rdf:li>\n           <rdf:li>d 0.669590 0.323126</rdf:li>\n           <rdf:li>r 0.182771</rdf:li>\n           <rdf:li>d 0.660055 0.269795</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.087500\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.182847\"\n          crs:Flow=\"0.986301\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.183345</rdf:li>\n           <rdf:li>d 0.650061 0.364244</rdf:li>\n           <rdf:li>r 0.183269</rdf:li>\n           <rdf:li>d 0.634270 0.314203</rdf:li>\n           <rdf:li>r 0.182997</rdf:li>\n           <rdf:li>d 0.628156 0.259776</rdf:li>\n           <rdf:li>r 0.182774</rdf:li>\n           <rdf:li>d 0.663351 0.275775</rdf:li>\n           <rdf:li>r 0.182847</rdf:li>\n           <rdf:li>d 0.680660 0.324566</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.087500\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.420000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.182507\"\n          crs:Flow=\"0.986301\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.181993</rdf:li>\n           <rdf:li>d 0.703988 0.218290</rdf:li>\n           <rdf:li>r 0.182507</rdf:li>\n           <rdf:li>d 0.677470 0.255461</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.400000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.180407\"\n          crs:Flow=\"0.986301\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.180247</rdf:li>\n           <rdf:li>d 0.840455 0.106555</rdf:li>\n           <rdf:li>r 0.180320</rdf:li>\n           <rdf:li>d 0.850756 0.158844</rdf:li>\n           <rdf:li>r 0.180389</rdf:li>\n           <rdf:li>d 0.860276 0.211544</rdf:li>\n           <rdf:li>r 0.180441</rdf:li>\n           <rdf:li>d 0.869743 0.264339</rdf:li>\n           <rdf:li>r 0.180480</rdf:li>\n           <rdf:li>d 0.877846 0.317678</rdf:li>\n           <rdf:li>r 0.180488</rdf:li>\n           <rdf:li>d 0.886155 0.370971</rdf:li>\n           <rdf:li>r 0.180466</rdf:li>\n           <rdf:li>d 0.894389 0.424281</rdf:li>\n           <rdf:li>r 0.180387</rdf:li>\n           <rdf:li>d 0.906194 0.475949</rdf:li>\n           <rdf:li>r 0.180285</rdf:li>\n           <rdf:li>d 0.919965 0.526341</rdf:li>\n           <rdf:li>r 0.180186</rdf:li>\n           <rdf:li>d 0.935775 0.575146</rdf:li>\n           <rdf:li>r 0.180101</rdf:li>\n           <rdf:li>d 0.954227 0.621535</rdf:li>\n           <rdf:li>r 0.180117</rdf:li>\n           <rdf:li>d 0.953938 0.567036</rdf:li>\n           <rdf:li>r 0.180149</rdf:li>\n           <rdf:li>d 0.948287 0.513215</rdf:li>\n           <rdf:li>r 0.180172</rdf:li>\n           <rdf:li>d 0.942569 0.459350</rdf:li>\n           <rdf:li>r 0.180192</rdf:li>\n           <rdf:li>d 0.934792 0.406046</rdf:li>\n           <rdf:li>r 0.180209</rdf:li>\n           <rdf:li>d 0.924848 0.353538</rdf:li>\n           <rdf:li>r 0.180213</rdf:li>\n           <rdf:li>d 0.914833 0.301039</rdf:li>\n           <rdf:li>r 0.180202</rdf:li>\n           <rdf:li>d 0.904696 0.248596</rdf:li>\n           <rdf:li>r 0.180186</rdf:li>\n           <rdf:li>d 0.893157 0.196827</rdf:li>\n           <rdf:li>r 0.180164</rdf:li>\n           <rdf:li>d 0.880879 0.145479</rdf:li>\n           <rdf:li>r 0.180222</rdf:li>\n           <rdf:li>d 0.884998 0.199537</rdf:li>\n           <rdf:li>r 0.180266</rdf:li>\n           <rdf:li>d 0.892762 0.252854</rdf:li>\n           <rdf:li>r 0.180301</rdf:li>\n           <rdf:li>d 0.899774 0.306454</rdf:li>\n           <rdf:li>r 0.180311</rdf:li>\n           <rdf:li>d 0.907621 0.359830</rdf:li>\n           <rdf:li>r 0.180300</rdf:li>\n           <rdf:li>d 0.915395 0.413226</rdf:li>\n           <rdf:li>r 0.180265</rdf:li>\n           <rdf:li>d 0.923695 0.466405</rdf:li>\n           <rdf:li>r 0.180219</rdf:li>\n           <rdf:li>d 0.931920 0.519545</rdf:li>\n           <rdf:li>r 0.180159</rdf:li>\n           <rdf:li>d 0.942740 0.571471</rdf:li>\n           <rdf:li>r 0.180096</rdf:li>\n           <rdf:li>d 0.955791 0.622030</rdf:li>\n           <rdf:li>r 0.180055</rdf:li>\n           <rdf:li>d 0.970049 0.671679</rdf:li>\n           <rdf:li>r 0.180052</rdf:li>\n           <rdf:li>d 0.974151 0.617571</rdf:li>\n           <rdf:li>r 0.180066</rdf:li>\n           <rdf:li>d 0.970645 0.563409</rdf:li>\n           <rdf:li>r 0.180081</rdf:li>\n           <rdf:li>d 0.967084 0.509200</rdf:li>\n           <rdf:li>r 0.180105</rdf:li>\n           <rdf:li>d 0.959576 0.455904</rdf:li>\n           <rdf:li>r 0.180123</rdf:li>\n           <rdf:li>d 0.952003 0.402581</rdf:li>\n           <rdf:li>r 0.180133</rdf:li>\n           <rdf:li>d 0.943722 0.349471</rdf:li>\n           <rdf:li>r 0.180139</rdf:li>\n           <rdf:li>d 0.933910 0.296943</rdf:li>\n           <rdf:li>r 0.180136</rdf:li>\n           <rdf:li>d 0.924034 0.244445</rdf:li>\n           <rdf:li>r 0.180134</rdf:li>\n           <rdf:li>d 0.911309 0.193353</rdf:li>\n           <rdf:li>r 0.180233</rdf:li>\n           <rdf:li>d 0.895971 0.242033</rdf:li>\n           <rdf:li>r 0.180328</rdf:li>\n           <rdf:li>d 0.893357 0.296316</rdf:li>\n           <rdf:li>r 0.180424</rdf:li>\n           <rdf:li>d 0.890686 0.350711</rdf:li>\n           <rdf:li>r 0.180496</rdf:li>\n           <rdf:li>d 0.889297 0.405332</rdf:li>\n           <rdf:li>r 0.180542</rdf:li>\n           <rdf:li>d 0.887836 0.460009</rdf:li>\n           <rdf:li>r 0.180557</rdf:li>\n           <rdf:li>d 0.886327 0.514715</rdf:li>\n           <rdf:li>r 0.180539</rdf:li>\n           <rdf:li>d 0.884742 0.569415</rdf:li>\n           <rdf:li>r 0.180487</rdf:li>\n           <rdf:li>d 0.883393 0.624091</rdf:li>\n           <rdf:li>r 0.180411</rdf:li>\n           <rdf:li>d 0.881976 0.678698</rdf:li>\n           <rdf:li>r 0.180319</rdf:li>\n           <rdf:li>d 0.880801 0.733219</rdf:li>\n           <rdf:li>r 0.180229</rdf:li>\n           <rdf:li>d 0.879577 0.787624</rdf:li>\n           <rdf:li>r 0.180143</rdf:li>\n           <rdf:li>d 0.885057 0.841087</rdf:li>\n           <rdf:li>r 0.180191</rdf:li>\n           <rdf:li>d 0.888900 0.787019</rdf:li>\n           <rdf:li>r 0.180283</rdf:li>\n           <rdf:li>d 0.886905 0.732767</rdf:li>\n           <rdf:li>r 0.180389</rdf:li>\n           <rdf:li>d 0.884863 0.678391</rdf:li>\n           <rdf:li>r 0.180525</rdf:li>\n           <rdf:li>d 0.878945 0.624630</rdf:li>\n           <rdf:li>r 0.180669</rdf:li>\n           <rdf:li>d 0.871245 0.571292</rdf:li>\n           <rdf:li>r 0.180794</rdf:li>\n           <rdf:li>d 0.863469 0.517857</rdf:li>\n           <rdf:li>r 0.180937</rdf:li>\n           <rdf:li>d 0.851379 0.466235</rdf:li>\n           <rdf:li>r 0.181218</rdf:li>\n           <rdf:li>d 0.828955 0.509088</rdf:li>\n           <rdf:li>r 0.181202</rdf:li>\n           <rdf:li>d 0.826530 0.563909</rdf:li>\n           <rdf:li>r 0.181133</rdf:li>\n           <rdf:li>d 0.824030 0.618691</rdf:li>\n           <rdf:li>r 0.180992</rdf:li>\n           <rdf:li>d 0.823677 0.673493</rdf:li>\n           <rdf:li>r 0.180819</rdf:li>\n           <rdf:li>d 0.823260 0.728175</rdf:li>\n           <rdf:li>r 0.180606</rdf:li>\n           <rdf:li>d 0.825626 0.782518</rdf:li>\n           <rdf:li>r 0.180406</rdf:li>\n           <rdf:li>d 0.827947 0.836693</rdf:li>\n           <rdf:li>r 0.180233</rdf:li>\n           <rdf:li>d 0.832812 0.890225</rdf:li>\n           <rdf:li>r 0.180134</rdf:li>\n           <rdf:li>d 0.839703 0.943024</rdf:li>\n           <rdf:li>r 0.180136</rdf:li>\n           <rdf:li>d 0.862005 0.899956</rdf:li>\n           <rdf:li>r 0.180154</rdf:li>\n           <rdf:li>d 0.876399 0.849915</rdf:li>\n           <rdf:li>r 0.180169</rdf:li>\n           <rdf:li>d 0.890749 0.799791</rdf:li>\n           <rdf:li>r 0.180216</rdf:li>\n           <rdf:li>d 0.896233 0.745931</rdf:li>\n           <rdf:li>r 0.180276</rdf:li>\n           <rdf:li>d 0.898937 0.691562</rdf:li>\n           <rdf:li>r 0.180356</rdf:li>\n           <rdf:li>d 0.897673 0.637060</rdf:li>\n           <rdf:li>r 0.180427</rdf:li>\n           <rdf:li>d 0.878665 0.683630</rdf:li>\n           <rdf:li>r 0.180479</rdf:li>\n           <rdf:li>d 0.859574 0.730207</rdf:li>\n           <rdf:li>r 0.180446</rdf:li>\n           <rdf:li>d 0.846218 0.781118</rdf:li>\n           <rdf:li>r 0.180389</rdf:li>\n           <rdf:li>d 0.832806 0.831945</rdf:li>\n           <rdf:li>r 0.180298</rdf:li>\n           <rdf:li>d 0.822038 0.884026</rdf:li>\n           <rdf:li>r 0.180218</rdf:li>\n           <rdf:li>d 0.809959 0.935370</rdf:li>\n           <rdf:li>r 0.180331</rdf:li>\n           <rdf:li>d 0.816925 0.882080</rdf:li>\n           <rdf:li>r 0.180495</rdf:li>\n           <rdf:li>d 0.819378 0.827891</rdf:li>\n           <rdf:li>r 0.180672</rdf:li>\n           <rdf:li>d 0.821800 0.773541</rdf:li>\n           <rdf:li>r 0.180965</rdf:li>\n           <rdf:li>d 0.811642 0.721473</rdf:li>\n           <rdf:li>r 0.181353</rdf:li>\n           <rdf:li>d 0.792934 0.675119</rdf:li>\n           <rdf:li>r 0.181777</rdf:li>\n           <rdf:li>d 0.756998 0.681839</rdf:li>\n           <rdf:li>r 0.182102</rdf:li>\n           <rdf:li>d 0.722950 0.701579</rdf:li>\n           <rdf:li>r 0.182309</rdf:li>\n           <rdf:li>d 0.691127 0.728947</rdf:li>\n           <rdf:li>r 0.182411</rdf:li>\n           <rdf:li>d 0.660668 0.759835</rdf:li>\n           <rdf:li>r 0.182437</rdf:li>\n           <rdf:li>d 0.630150 0.790660</rdf:li>\n           <rdf:li>r 0.182387</rdf:li>\n           <rdf:li>d 0.599523 0.821227</rdf:li>\n           <rdf:li>r 0.182515</rdf:li>\n           <rdf:li>d 0.626660 0.784006</rdf:li>\n           <rdf:li>r 0.182405</rdf:li>\n           <rdf:li>d 0.598638 0.819740</rdf:li>\n           <rdf:li>r 0.182223</rdf:li>\n           <rdf:li>d 0.570621 0.855344</rdf:li>\n           <rdf:li>r 0.182002</rdf:li>\n           <rdf:li>d 0.541412 0.888566</rdf:li>\n           <rdf:li>r 0.181729</rdf:li>\n           <rdf:li>d 0.512250 0.921628</rdf:li>\n           <rdf:li>r 0.181447</rdf:li>\n           <rdf:li>d 0.481620 0.951342</rdf:li>\n           <rdf:li>r 0.181162</rdf:li>\n           <rdf:li>d 0.449920 0.978149</rdf:li>\n           <rdf:li>r 0.180869</rdf:li>\n           <rdf:li>d 0.418313 1.004807</rdf:li>\n           <rdf:li>r 0.180610</rdf:li>\n           <rdf:li>d 0.385481 1.027633</rdf:li>\n           <rdf:li>r 0.180378</rdf:li>\n           <rdf:li>d 0.353047 1.051227</rdf:li>\n           <rdf:li>r 0.180607</rdf:li>\n           <rdf:li>d 0.340358 1.000597</rdf:li>\n           <rdf:li>r 0.180888</rdf:li>\n           <rdf:li>d 0.329711 0.948790</rdf:li>\n           <rdf:li>r 0.181156</rdf:li>\n           <rdf:li>d 0.316359 0.898110</rdf:li>\n           <rdf:li>r 0.181440</rdf:li>\n           <rdf:li>d 0.305661 0.845915</rdf:li>\n           <rdf:li>r 0.181696</rdf:li>\n           <rdf:li>d 0.294817 0.793599</rdf:li>\n           <rdf:li>r 0.181911</rdf:li>\n           <rdf:li>d 0.284273 0.740995</rdf:li>\n           <rdf:li>r 0.182069</rdf:li>\n           <rdf:li>d 0.273767 0.688253</rdf:li>\n           <rdf:li>r 0.182175</rdf:li>\n           <rdf:li>d 0.264362 0.634972</rdf:li>\n           <rdf:li>r 0.182223</rdf:li>\n           <rdf:li>d 0.255964 0.581272</rdf:li>\n           <rdf:li>r 0.182225</rdf:li>\n           <rdf:li>d 0.249668 0.526917</rdf:li>\n           <rdf:li>r 0.182491</rdf:li>\n           <rdf:li>d 0.273569 0.568622</rdf:li>\n           <rdf:li>r 0.182685</rdf:li>\n           <rdf:li>d 0.297258 0.610783</rdf:li>\n           <rdf:li>r 0.182832</rdf:li>\n           <rdf:li>d 0.322750 0.650609</rdf:li>\n           <rdf:li>r 0.182898</rdf:li>\n           <rdf:li>d 0.348313 0.690418</rdf:li>\n           <rdf:li>r 0.182885</rdf:li>\n           <rdf:li>d 0.374312 0.729606</rdf:li>\n           <rdf:li>r 0.182789</rdf:li>\n           <rdf:li>d 0.400378 0.768650</rdf:li>\n           <rdf:li>r 0.182613</rdf:li>\n           <rdf:li>d 0.426448 0.807576</rdf:li>\n           <rdf:li>r 0.182353</rdf:li>\n           <rdf:li>d 0.451712 0.847488</rdf:li>\n           <rdf:li>r 0.182023</rdf:li>\n           <rdf:li>d 0.475858 0.888665</rdf:li>\n           <rdf:li>r 0.182363</rdf:li>\n           <rdf:li>d 0.452364 0.846668</rdf:li>\n           <rdf:li>r 0.182684</rdf:li>\n           <rdf:li>d 0.431166 0.801836</rdf:li>\n           <rdf:li>r 0.182920</rdf:li>\n           <rdf:li>d 0.408530 0.758384</rdf:li>\n           <rdf:li>r 0.183078</rdf:li>\n           <rdf:li>d 0.385889 0.714795</rdf:li>\n           <rdf:li>r 0.183135</rdf:li>\n           <rdf:li>d 0.362315 0.672247</rdf:li>\n           <rdf:li>r 0.183103</rdf:li>\n           <rdf:li>d 0.338782 0.629640</rdf:li>\n           <rdf:li>r 0.182990</rdf:li>\n           <rdf:li>d 0.315689 0.586544</rdf:li>\n           <rdf:li>r 0.182793</rdf:li>\n           <rdf:li>d 0.292675 0.543466</rdf:li>\n           <rdf:li>r 0.182536</rdf:li>\n           <rdf:li>d 0.270601 0.499439</rdf:li>\n           <rdf:li>r 0.182221</rdf:li>\n           <rdf:li>d 0.248923 0.455167</rdf:li>\n           <rdf:li>r 0.181860</rdf:li>\n           <rdf:li>d 0.227357 0.411014</rdf:li>\n           <rdf:li>r 0.181497</rdf:li>\n           <rdf:li>d 0.207921 0.364871</rdf:li>\n           <rdf:li>r 0.181172</rdf:li>\n           <rdf:li>d 0.193403 0.314892</rdf:li>\n           <rdf:li>r 0.180883</rdf:li>\n           <rdf:li>d 0.182924 0.262768</rdf:li>\n           <rdf:li>r 0.180646</rdf:li>\n           <rdf:li>d 0.177743 0.208907</rdf:li>\n           <rdf:li>r 0.180473</rdf:li>\n           <rdf:li>d 0.179474 0.154509</rdf:li>\n           <rdf:li>r 0.180836</rdf:li>\n           <rdf:li>d 0.211372 0.178663</rdf:li>\n           <rdf:li>r 0.181262</rdf:li>\n           <rdf:li>d 0.232922 0.221812</rdf:li>\n           <rdf:li>r 0.181693</rdf:li>\n           <rdf:li>d 0.250120 0.269564</rdf:li>\n           <rdf:li>r 0.182107</rdf:li>\n           <rdf:li>d 0.265719 0.318852</rdf:li>\n           <rdf:li>r 0.182492</rdf:li>\n           <rdf:li>d 0.281412 0.368322</rdf:li>\n           <rdf:li>r 0.182805</rdf:li>\n           <rdf:li>d 0.295335 0.419223</rdf:li>\n           <rdf:li>r 0.183048</rdf:li>\n           <rdf:li>d 0.309341 0.470241</rdf:li>\n           <rdf:li>r 0.183197</rdf:li>\n           <rdf:li>d 0.322304 0.522005</rdf:li>\n           <rdf:li>r 0.183261</rdf:li>\n           <rdf:li>d 0.335752 0.573552</rdf:li>\n           <rdf:li>r 0.183234</rdf:li>\n           <rdf:li>d 0.349253 0.625079</rdf:li>\n           <rdf:li>r 0.183132</rdf:li>\n           <rdf:li>d 0.364065 0.675754</rdf:li>\n           <rdf:li>r 0.182962</rdf:li>\n           <rdf:li>d 0.380226 0.725419</rdf:li>\n           <rdf:li>r 0.182711</rdf:li>\n           <rdf:li>d 0.396194 0.775090</rdf:li>\n           <rdf:li>r 0.183004</rdf:li>\n           <rdf:li>d 0.383709 0.723270</rdf:li>\n           <rdf:li>r 0.183224</rdf:li>\n           <rdf:li>d 0.371363 0.671225</rdf:li>\n           <rdf:li>r 0.183358</rdf:li>\n           <rdf:li>d 0.359042 0.619064</rdf:li>\n           <rdf:li>r 0.183414</rdf:li>\n           <rdf:li>d 0.347946 0.566238</rdf:li>\n           <rdf:li>r 0.183368</rdf:li>\n           <rdf:li>d 0.336171 0.513741</rdf:li>\n           <rdf:li>r 0.183229</rdf:li>\n           <rdf:li>d 0.324453 0.461269</rdf:li>\n           <rdf:li>r 0.182990</rdf:li>\n           <rdf:li>d 0.311438 0.409616</rdf:li>\n           <rdf:li>r 0.182670</rdf:li>\n           <rdf:li>d 0.297914 0.358432</rdf:li>\n           <rdf:li>r 0.182294</rdf:li>\n           <rdf:li>d 0.284473 0.307406</rdf:li>\n           <rdf:li>r 0.181864</rdf:li>\n           <rdf:li>d 0.269256 0.257806</rdf:li>\n           <rdf:li>r 0.181414</rdf:li>\n           <rdf:li>d 0.252541 0.209621</rdf:li>\n           <rdf:li>r 0.180967</rdf:li>\n           <rdf:li>d 0.231741 0.165581</rdf:li>\n           <rdf:li>r 0.180571</rdf:li>\n           <rdf:li>d 0.202857 0.133949</rdf:li>\n           <rdf:li>r 0.180493</rdf:li>\n           <rdf:li>d 0.175346 0.169804</rdf:li>\n           <rdf:li>r 0.180496</rdf:li>\n           <rdf:li>d 0.156957 0.217076</rdf:li>\n           <rdf:li>r 0.180516</rdf:li>\n           <rdf:li>d 0.143379 0.267880</rdf:li>\n           <rdf:li>r 0.180530</rdf:li>\n           <rdf:li>d 0.132403 0.320089</rdf:li>\n           <rdf:li>r 0.180513</rdf:li>\n           <rdf:li>d 0.121501 0.372329</rdf:li>\n           <rdf:li>r 0.180497</rdf:li>\n           <rdf:li>d 0.114035 0.425906</rdf:li>\n           <rdf:li>r 0.180452</rdf:li>\n           <rdf:li>d 0.106647 0.479472</rdf:li>\n           <rdf:li>r 0.180383</rdf:li>\n           <rdf:li>d 0.099336 0.532998</rdf:li>\n           <rdf:li>r 0.180335</rdf:li>\n           <rdf:li>d 0.097341 0.587561</rdf:li>\n           <rdf:li>r 0.180273</rdf:li>\n           <rdf:li>d 0.095415 0.642059</rdf:li>\n           <rdf:li>r 0.180222</rdf:li>\n           <rdf:li>d 0.096957 0.696564</rdf:li>\n           <rdf:li>r 0.180171</rdf:li>\n           <rdf:li>d 0.098553 0.750978</rdf:li>\n           <rdf:li>r 0.180147</rdf:li>\n           <rdf:li>d 0.107398 0.803856</rdf:li>\n           <rdf:li>r 0.180129</rdf:li>\n           <rdf:li>d 0.116287 0.856645</rdf:li>\n           <rdf:li>r 0.180125</rdf:li>\n           <rdf:li>d 0.132802 0.905188</rdf:li>\n           <rdf:li>d 0.154396 0.949022</rdf:li>\n           <rdf:li>r 0.180126</rdf:li>\n           <rdf:li>d 0.181520 0.985274</rdf:li>\n           <rdf:li>r 0.180169</rdf:li>\n           <rdf:li>d 0.217383 0.990759</rdf:li>\n           <rdf:li>r 0.180354</rdf:li>\n           <rdf:li>d 0.230472 0.940981</rdf:li>\n           <rdf:li>r 0.180654</rdf:li>\n           <rdf:li>d 0.243590 0.891046</rdf:li>\n           <rdf:li>r 0.180971</rdf:li>\n           <rdf:li>d 0.247560 0.837231</rdf:li>\n           <rdf:li>r 0.181283</rdf:li>\n           <rdf:li>d 0.248750 0.782820</rdf:li>\n           <rdf:li>r 0.181538</rdf:li>\n           <rdf:li>d 0.246006 0.728242</rdf:li>\n           <rdf:li>r 0.181681</rdf:li>\n           <rdf:li>d 0.237988 0.674607</rdf:li>\n           <rdf:li>r 0.181282</rdf:li>\n           <rdf:li>d 0.222265 0.723612</rdf:li>\n           <rdf:li>r 0.180955</rdf:li>\n           <rdf:li>d 0.214056 0.776585</rdf:li>\n           <rdf:li>r 0.180678</rdf:li>\n           <rdf:li>d 0.210267 0.830605</rdf:li>\n           <rdf:li>r 0.180472</rdf:li>\n           <rdf:li>d 0.213196 0.884775</rdf:li>\n           <rdf:li>r 0.180377</rdf:li>\n           <rdf:li>d 0.229557 0.933530</rdf:li>\n           <rdf:li>r 0.180393</rdf:li>\n           <rdf:li>d 0.258670 0.966430</rdf:li>\n           <rdf:li>r 0.180495</rdf:li>\n           <rdf:li>d 0.293640 0.981427</rdf:li>\n           <rdf:li>r 0.180631</rdf:li>\n           <rdf:li>d 0.329695 0.988558</rdf:li>\n           <rdf:li>r 0.180784</rdf:li>\n           <rdf:li>d 0.366066 0.990678</rdf:li>\n           <rdf:li>r 0.180911</rdf:li>\n           <rdf:li>d 0.402516 0.992707</rdf:li>\n           <rdf:li>r 0.181032</rdf:li>\n           <rdf:li>d 0.439009 0.990915</rdf:li>\n           <rdf:li>r 0.181111</rdf:li>\n           <rdf:li>d 0.475550 0.989012</rdf:li>\n           <rdf:li>r 0.181144</rdf:li>\n           <rdf:li>d 0.512103 0.986556</rdf:li>\n           <rdf:li>r 0.181126</rdf:li>\n           <rdf:li>d 0.548657 0.983983</rdf:li>\n           <rdf:li>r 0.181043</rdf:li>\n           <rdf:li>d 0.585215 0.983106</rdf:li>\n           <rdf:li>r 0.180918</rdf:li>\n           <rdf:li>d 0.621720 0.982123</rdf:li>\n           <rdf:li>r 0.180739</rdf:li>\n           <rdf:li>d 0.658092 0.984344</rdf:li>\n           <rdf:li>r 0.180543</rdf:li>\n           <rdf:li>d 0.694292 0.988001</rdf:li>\n           <rdf:li>r 0.180361</rdf:li>\n           <rdf:li>d 0.730385 0.991591</rdf:li>\n           <rdf:li>r 0.180217</rdf:li>\n           <rdf:li>d 0.766392 0.994771</rdf:li>\n           <rdf:li>r 0.180394</rdf:li>\n           <rdf:li>d 0.731380 0.982661</rdf:li>\n           <rdf:li>r 0.180616</rdf:li>\n           <rdf:li>d 0.695784 0.973669</rdf:li>\n           <rdf:li>r 0.180863</rdf:li>\n           <rdf:li>d 0.660072 0.964606</rdf:li>\n           <rdf:li>r 0.181073</rdf:li>\n           <rdf:li>d 0.623764 0.960688</rdf:li>\n           <rdf:li>r 0.181254</rdf:li>\n           <rdf:li>d 0.587367 0.956671</rdf:li>\n           <rdf:li>r 0.181356</rdf:li>\n           <rdf:li>d 0.550773 0.956788</rdf:li>\n           <rdf:li>r 0.181404</rdf:li>\n           <rdf:li>d 0.514144 0.956852</rdf:li>\n           <rdf:li>r 0.181310</rdf:li>\n           <rdf:li>d 0.550584 0.962097</rdf:li>\n           <rdf:li>r 0.181228</rdf:li>\n           <rdf:li>d 0.587152 0.959856</rdf:li>\n           <rdf:li>r 0.181098</rdf:li>\n           <rdf:li>d 0.623665 0.957509</rdf:li>\n           <rdf:li>r 0.180948</rdf:li>\n           <rdf:li>d 0.660021 0.952705</rdf:li>\n           <rdf:li>r 0.180769</rdf:li>\n           <rdf:li>d 0.696288 0.947818</rdf:li>\n           <rdf:li>r 0.180579</rdf:li>\n           <rdf:li>d 0.732453 0.942866</rdf:li>\n           <rdf:li>r 0.180399</rdf:li>\n           <rdf:li>d 0.768479 0.937325</rdf:li>\n           <rdf:li>r 0.180248</rdf:li>\n           <rdf:li>d 0.804394 0.931758</rdf:li>\n           <rdf:li>r 0.180150</rdf:li>\n           <rdf:li>d 0.840149 0.925232</rdf:li>\n           <rdf:li>r 0.180125</rdf:li>\n           <rdf:li>d 0.875818 0.918727</rdf:li>\n           <rdf:li>r 0.180145</rdf:li>\n           <rdf:li>d 0.911427 0.912269</rdf:li>\n           <rdf:li>r 0.180189</rdf:li>\n           <rdf:li>d 0.946961 0.905166</rdf:li>\n           <rdf:li>r 0.180253</rdf:li>\n           <rdf:li>d 0.982519 0.898160</rdf:li>\n           <rdf:li>r 0.180335</rdf:li>\n           <rdf:li>d 1.018096 0.890506</rdf:li>\n           <rdf:li>r 0.180431</rdf:li>\n           <rdf:li>d 1.053826 0.882998</rdf:li>\n           <rdf:li>r 0.180531</rdf:li>\n           <rdf:li>d 1.089511 0.874036</rdf:li>\n           <rdf:li>r 0.180407</rdf:li>\n           <rdf:li>d 1.053420 0.870242</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:PaintBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n"
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
				"<string>": ""
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
								"'ClrB'":
								{
									"'ShdL'":
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
												"<integer>": 0
											}
										]
									},
									"'MdtL'":
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
												"<integer>": 0
											}
										]
									},
									"'HghL'":
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
												"<integer>": 0
											}
										]
									},
									"'PrsL'":
									{
										"<boolean>": true
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
						"<integer>": 42
					},
					{
						"<integer>": 43
					},
					{
						"<integer>": 44
					},
					{
						"<integer>": 45
					},
					{
						"<integer>": 46
					},
					{
						"<integer>": 47
					},
					{
						"<integer>": 48
					},
					{
						"<integer>": 49
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
