// Application: C:\Program Files\Adobe\Adobe Photoshop CC 2019 (20.0.0)
// Date: 2021-11-25T13:31:42-08:00
// Actions file: C:\Users\NT Studio\Desktop\NT.atn
// Action set: NT

// jamEngine.jsxinc v4.4.4 (minified)
if(typeof jamEngine!=='object') {var jamEngine={};(function() {var that;jamEngine.meaningfulIds=false;jamEngine.parseFriendly=false;jamEngine.displayDialogs=DialogModes.ERROR;var conflictingStringIdStrs={"'Algn'":["align","alignment"],"'AntA'":["antiAlias","antiAliasedPICTAcquire"],"'BckL'":["backgroundLayer","backgroundLevel"],"'BlcG'":["blackGenerationType","blackGenerationCurve"],"'BlcL'":["blackLevel","blackLimit"],"'Blks'":["blacks","blocks"],"'BlrM'":["blurMethod","blurMore"],"'BrgC'":["brightnessEvent","brightnessContrast"],"'BrsD'":["brushDetail","brushesDefine"],"'Brsh'":["brush","brushes"],"'Clcl'":["calculation","calculations"],"'ClrP'":["colorPalette","coloredPencil"],"'Cnst'":["constant","constrain"],"'CntC'":["centerCropMarks","conteCrayon"],"'Cntr'":["center","contrast"],"'CrtD'":["createDroplet","createDuplicate"],"'CstP'":["customPalette","customPhosphors"],"'Cstm'":["custom","customPattern"],"'Drkn'":["darken","darkness"],"'Dstr'":["distort","distortion","distribute","distribution"],"'Dstt'":["desaturate","destWhiteMax"],"'FlIn'":["fileInfo","fillInverse"],"'Gd  '":["good","guide"],"'GnrP'":["generalPreferences","generalPrefs","preferencesClass"],"'GrSt'":["grainStippled","graySetup"],"'Grdn'":["gradientClassEvent","gridMinor"],"'Grn '":["grain","green"],"'Grns'":["graininess","greens"],"'HstP'":["historyPreferences","historyPrefs"],"'HstS'":["historyState","historyStateSourceType"],"'ImgP'":["imageCachePreferences","imagePoint"],"'In  '":["in","stampIn"],"'IntW'":["interfaceWhite","intersectWith"],"'Intr'":["interfaceIconFrameDimmed","interlace","interpolation","intersect"],"'JPEG'":["JPEG","JPEGFormat"],"'LghD'":["lightDirection","lightDirectional"],"'LghO'":["lightOmni","lightenOnly"],"'LghS'":["lightSource","lightSpot"],"'Lns '":["lens","lines"],"'Mgnt'":["magenta","magentas"],"'MrgL'":["mergeLayers","mergedLayers"],"'Mxm '":["maximum","maximumQuality"],"'NTSC'":["NTSC","NTSCColors"],"'NmbL'":["numberOfLayers","numberOfLevels"],"'PlgP'":["pluginPicker","pluginPrefs"],"'Pncl'":["pencilEraser","pencilWidth"],"'Pnt '":["paint","point"],"'Prsp'":["perspective","perspectiveIndex"],"'PrvM'":["previewMacThumbnail","previewMagenta"],"'Pstr'":["posterization","posterize"],"'RGBS'":["RGBSetup","RGBSetupSource"],"'Rds '":["radius","reds"],"'ScrD'":["scratchDisks","screenDot"],"'ShdI'":["shadingIntensity","shadowIntensity"],"'ShpC'":["shapeCurveType","shapingCurve"],"'ShrE'":["sharpenEdges","shearEd"],"'Shrp'":["sharpen","sharpness"],"'SplC'":["splitChannels","supplementalCategories"],"'Spot'":["spot","spotColor"],"'SprS'":["separationSetup","sprayedStrokes"],"'StrL'":["strokeLength","strokeLocation"],"'Strt'":["saturation","start"],"'TEXT'":["char","textType"],"'TIFF'":["TIFF","TIFFFormat"],"'TglO'":["toggleOptionsPalette","toggleOthers"],"'TrnG'":["transparencyGamutPreferences","transparencyGrid","transparencyGridSize"],"'TrnS'":["transferSpec","transparencyShape","transparencyStop"],"'Trns'":["transparency","transparent"],"'TxtC'":["textClickPoint","textureCoverage"],"'TxtF'":["textureFile","textureFill"],"'UsrM'":["userMaskEnabled","userMaskOptions"],"'c@#^'":["inherits","pInherits"],"'comp'":["comp","sInt64"],"'doub'":["floatType","IEEE64BitFloatingPoint","longFloat"],"'long'":["integer","longInteger","sInt32"],"'magn'":["magnitude","uInt32"],"'null'":["null","target"],"'shor'":["sInt16","sMInt","shortInteger"],"'sing'":["IEEE32BitFloatingPoint","sMFloat","shortFloat"]};jamEngine.getConflictingStringIdStrs=function(charIdStr) {return conflictingStringIdStrs[charIdStr]||null;};jamEngine.uniIdStrToId=function(uniIdStr) {var id=0;if(typeof uniIdStr==='string') {if((uniIdStr.length===(1+4+1))&&(uniIdStr.charAt(0)==="'")&&(uniIdStr.charAt(5)==="'")) {id=app.charIDToTypeID(uniIdStr.substring(1,5));} else {id=app.stringIDToTypeID(uniIdStr);}} return id;};var smallestHashValue=app.charIDToTypeID("    ");jamEngine.idToUniIdStrs=function(id) {var charIdStr="";var stringIdStr=app.typeIDToStringID(id);if(id>=smallestHashValue) {charIdStr="'"+app.typeIDToCharID(id)+"'";if(stringIdStr!=="") {if(charIdStr in conflictingStringIdStrs) {stringIdStr=conflictingStringIdStrs[charIdStr];}}} return[charIdStr,stringIdStr];};jamEngine.equivalentUniIdStrs=function(uniIdStr1,uniIdStr2) {return this.uniIdStrToId(uniIdStr1)===this.uniIdStrToId(uniIdStr2);};function putInReference(ref,containers) {if(containers.constructor===Array) {var count=containers.length;for(var i=0;i<count;i++) {var container=that.parseCompact(containers[i]);var desiredClassId=that.uniIdStrToId(container[0]);var typedValue=that.parseCompact(container[1]);var form=typedValue[0];var value=typedValue[1];switch(form) {case"<class>":ref.putClass(desiredClassId);break;case"<enumerated>":var enumerated=that.parseCompact(value);ref.putEnumerated(desiredClassId,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<identifier>":ref.putIdentifier(desiredClassId,value);break;case"<index>":ref.putIndex(desiredClassId,value);break;case"<name>":ref.putName(desiredClassId,value);break;case"<offset>":ref.putOffset(desiredClassId,value);break;case"<property>":ref.putProperty(desiredClassId,that.uniIdStrToId(value));break;default:throw new Error("[jamEngine putInReference] Unknown reference form: "+form);break;}}} else {throw new Error("[jamEngine putInReference] JavaScript array expected");}} function putInList(list,items) {if(items.constructor===Array) {var count=items.length;for(var i=0;i<count;i++) {var item=that.parseCompact(items[i]);var type=item[0];var value=item[1];switch(type) {case"<boolean>":list.putBoolean(value);break;case"<class>":list.putClass(that.uniIdStrToId(value));break;case"<data>":list.putData(value);break;case"<double>":list.putDouble(value);break;case"<enumerated>":var enumerated=that.parseCompact(value);list.putEnumerated(that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":list.putInteger(value);break;case"<largeInteger>":list.putLargeInteger(value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);list.putList(actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);list.putObject(that.uniIdStrToId(object[0]),actionDescriptor);} else {list.putClass(that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);list.putPath(fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);list.putReference(actionReference);break;case"<string>":list.putString(value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);list.putUnitDouble(that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInList] Unknown list type: "+type);break;}}} else {throw new Error("[jamEngine putInList] JavaScript array expected");}} function putInDescriptor(desc,members) {if(members.constructor===Object) {for(var key in members) {if(members.hasOwnProperty(key)) {var keyID=that.uniIdStrToId(key);var member=that.parseCompact(members[key]);var type=member[0];var value=member[1];switch(type) {case"<boolean>":desc.putBoolean(keyID,value);break;case"<class>":desc.putClass(keyID,that.uniIdStrToId(value));break;case"<data>":desc.putData(keyID,value);break;case"<double>":desc.putDouble(keyID,value);break;case"<enumerated>":var enumerated=that.parseCompact(value);desc.putEnumerated(keyID,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":desc.putInteger(keyID,value);break;case"<largeInteger>":desc.putLargeInteger(keyID,value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);desc.putList(keyID,actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);desc.putObject(keyID,that.uniIdStrToId(object[0]),actionDescriptor);} else {desc.putClass(keyID,that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);desc.putPath(keyID,fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);desc.putReference(keyID,actionReference);break;case"<string>":desc.putString(keyID,value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);desc.putUnitDouble(keyID,that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInDescriptor] Unknown descriptor type: "+type);break;}}}} else {throw new Error("[jamEngine putInDescriptor] JavaScript object expected");}} var contextRules={"'Algn'":{"<classKey>":{"bevelEmboss":"align","frameFX":"align","gradientFill":"align","gradientLayer":"align","patternFill":"align","patternLayer":"align"},"<event>":"align","<key>":"alignment"},"'AntA'":{"<class>":"antiAliasedPICTAcquire","<key>":"antiAlias"},"'BckL'":{"<class>":"backgroundLayer","<key>":"backgroundLevel"},"'BlcG'":{"<enumType>":"blackGenerationType","<key>":"blackGenerationCurve"},"'BlcL'":{"<classKey>":{"'GEfc'":"blackLevel","CMYKSetup":"blackLimit"},"<eventKey>":{"reticulation":"blackLevel"}},"'Blks'":{"<typeValue>":{"colors":"blacks","extrudeType":"blocks"}},"'BlrM'":{"<enumType>":"blurMethod","<event>":"blurMore","<key>":"blurMethod"},"'BrgC'":{"<class>":"brightnessContrast","<event>":"brightnessContrast"},"'BrsD'":{"<enumValue>":"brushesDefine","<key>":"brushDetail"},"'Brsh'":{"<class>":"brush","<key>":"brushes"},"'Clcl'":{"<class>":"calculation","<enumValue>":"calculations","<key>":"calculation"},"'ClrP'":{"<typeValue>":{"'GEft'":"coloredPencil"},"<enumType>":"colorPalette","<event>":"coloredPencil"},"'Cnst'":{"<classKey>":{"channelMatrix":"constant"},"<unknown>":"constrain"},"'CntC'":{"<typeValue>":{"'GEft'":"conteCrayon"},"<event>":"conteCrayon","<key>":"centerCropMarks"},"'Cntr'":{"<classKey>":{"'GEfc'":"contrast","brightnessContrast":"contrast","document":"center","polygon":"center","quadrilateral":"center"},"<eventKey>":{"adaptCorrect":"contrast","brightnessEvent":"contrast","grain":"contrast","halftoneScreen":"contrast","sumie":"contrast","tornEdges":"contrast","waterPaper":"contrast"},"<enumValue>":"center"},"'CrtD'":{"<enumValue>":"createDuplicate","<event>":"createDroplet"},"'CstP'":{"<class>":"customPhosphors","<key>":"customPalette"},"'Cstm'":{"<enumValue>":"customPattern","<event>":"custom","<key>":"custom"},"'Drkn'":{"<enumValue>":"darken","<key>":"darkness"},"'Dstr'":{"<classKey>":{"'GEfc'":"distortion"},"<eventKey>":{"glass":"distortion","addNoise":"distribution"},"<enumType>":"distribution","<enumValue>":"distort","<event>":"distribute"},"'Dstt'":{"<enumValue>":"desaturate","<event>":"desaturate","<key>":"destWhiteMax"},"'FlIn'":{"<typeValue>":{"fillColor":"fillInverse","menuItemType":"fileInfo"},"<class>":"fileInfo","<key>":"fileInfo"},"'Gd  '":{"<class>":"guide","<enumValue>":"good"},"'GnrP'":{"<class>":"preferencesClass","<enumValue>":"generalPreferences","<key>":"generalPrefs"},"'GrSt'":{"<class>":"graySetup","<enumValue>":"grainStippled","<key>":"graySetup"},"'Grdn'":{"<class>":"gradientClassEvent","<event>":"gradientClassEvent","<key>":"gridMinor"},"'Grn '":{"<typeValue>":{"'GEft'":"grain"},"<classKey>":{"'GEfc'":"grain","RGBColor":"green","blackAndWhite":"green","channelMatrix":"green","channelMixer":"green"},"<eventKey>":{"blackAndWhite":"green","channelMixer":"green","filmGrain":"grain"},"<enumValue>":"green","<event>":"grain"},"'Grns'":{"<enumValue>":"greens","<key>":"graininess"},"'HstP'":{"<enumValue>":"historyPreferences","<key>":"historyPrefs"},"'HstS'":{"<class>":"historyState","<enumType>":"historyStateSourceType"},"'ImgP'":{"<class>":"imagePoint","<enumValue>":"imageCachePreferences"},"'In  '":{"<enumValue>":"stampIn","<key>":"in"},"'IntW'":{"<event>":"intersectWith","<key>":"interfaceWhite"},"'Intr'":{"<typeValue>":{"shapeOperation":"intersect"},"<classKey>":{"GIFFormat":"interlace","SaveForWeb":"interlace","application":"interfaceIconFrameDimmed","computedBrush":"interpolation","dBrush":"interpolation","gradientClassEvent":"interpolation","photoshopEPSFormat":"interpolation","sampledBrush":"interpolation"},"<eventKey>":{"convertMode":"interpolation","imageSize":"interpolation","transform":"interpolation"},"<event>":"intersect"},"'JPEG'":{"<class>":"JPEGFormat","<enumValue>":"JPEG"},"'LghD'":{"<enumType>":"lightDirection","<enumValue>":"lightDirectional","<key>":"lightDirection"},"'LghO'":{"<typeValue>":{"diffuseMode":"lightenOnly","lightType":"lightOmni"}},"'LghS'":{"<class>":"lightSource","<enumValue>":"lightSpot","<key>":"lightSource"},"'Lns '":{"<enumType>":"lens","<enumValue>":"lines","<key>":"lens"},"'Mgnt'":{"<typeValue>":{"channel":"magenta","colors":"magentas","guideGridColor":"magenta"},"<key>":"magenta"},"'MrgL'":{"<enumValue>":"mergedLayers","<event>":"mergeLayers"},"'Mxm '":{"<enumValue>":"maximumQuality","<event>":"maximum","<key>":"maximum"},"'NTSC'":{"<enumValue>":"NTSC","<event>":"NTSCColors"},"'NmbL'":{"<classKey>":{"'GEfc'":"numberOfLevels","document":"numberOfLayers"},"<eventKey>":{"cutout":"numberOfLevels"}},"'PlgP'":{"<class>":"pluginPrefs","<enumValue>":"pluginPicker","<key>":"pluginPrefs"},"'Pncl'":{"<enumValue>":"pencilEraser","<key>":"pencilWidth"},"'Pnt '":{"<typeValue>":{"textType":"point"},"<class>":"point","<event>":"paint"},"'Prsp'":{"<enumValue>":"perspective","<key>":"perspectiveIndex"},"'PrvM'":{"<enumValue>":"previewMagenta","<key>":"previewMacThumbnail"},"'Pstr'":{"<class>":"posterize","<event>":"posterize","<key>":"posterization"},"'RGBS'":{"<enumType>":"RGBSetupSource","<key>":"RGBSetup"},"'Rds '":{"<enumValue>":"reds","<key>":"radius"},"'ScrD'":{"<enumValue>":"screenDot","<key>":"scratchDisks"},"'ShdI'":{"<classKey>":{"'GEfc'":"shadowIntensity"},"<eventKey>":{"watercolor":"shadowIntensity"},"<unknown>":"shadingIntensity"},"'ShpC'":{"<classKey>":{"application":"shapingCurve"},"<class>":"shapingCurve","<key>":"shapeCurveType"},"'ShrE'":{"<event>":"sharpenEdges","<key>":"shearEd"},"'Shrp'":{"<event>":"sharpen","<key>":"sharpness"},"'SplC'":{"<event>":"splitChannels","<key>":"supplementalCategories"},"'Spot'":{"<enumValue>":"spotColor","<key>":"spot"},"'SprS'":{"<typeValue>":{"'GEft'":"sprayedStrokes"},"<enumValue>":"separationSetup","<event>":"sprayedStrokes"},"'StrL'":{"<enumType>":"strokeLocation","<key>":"strokeLength"},"'Strt'":{"<classKey>":{"currentToolOptions":"saturation","fileNamingRules":"start","HSBColorClass":"saturation","hueSatAdjustment":"saturation","hueSatAdjustmentV2":"saturation","lineClass":"start","range":"start","vibrance":"saturation"},"<eventKey>":{"replaceColor":"saturation","variations":"saturation","vibrance":"saturation"},"<enumValue>":"saturation"},"'TEXT'":{"<enumType>":"textType","<key>":"textType"},"'TIFF'":{"<class>":"TIFFFormat","<enumValue>":"TIFF"},"'TglO'":{"<enumValue>":"toggleOptionsPalette","<key>":"toggleOthers"},"'TrnG'":{"<classKey>":{"application":"transparencyGrid","transparencyPrefs":"transparencyGridSize"},"<enumType>":"transparencyGridSize","<enumValue>":"transparencyGamutPreferences"},"'TrnS'":{"<classKey>":{"bevelEmboss":"transparencyShape","dropShadow":"transparencyShape","innerGlow":"transparencyShape","innerShadow":"transparencyShape","outerGlow":"transparencyShape"},"<class>":"transparencyStop","<unknown>":"transferSpec"},"'Trns'":{"<enumValue>":"transparent","<key>":"transparency"},"'TxtC'":{"<classKey>":{"'GEfc'":"textureCoverage","textLayer":"textClickPoint"},"<eventKey>":{"underpainting":"textureCoverage"}},"'TxtF'":{"<event>":"textureFill","<key>":"textureFile"},"'UsrM'":{"<enumType>":"userMaskOptions","<key>":"userMaskEnabled"},"'null'":{"<class>":"null","<enumValue>":"null","<event>":"null","<key>":"target"}};function getFromId(context,parentContext) {var uniIdStr;var kind=context[0];var id=context[1];if(id<smallestHashValue) {uniIdStr=app.typeIDToStringID(id);} else {uniIdStr="'"+app.typeIDToCharID(id)+"'";if(that.meaningfulIds) {if(uniIdStr in contextRules) {function resolveIdStr(candidates) {var idStr="";for(var parentString in candidates) {if(candidates.hasOwnProperty(parentString)) {if(parentContext[1]===that.uniIdStrToId(parentString)) {idStr=candidates[parentString];break;}}} return idStr;} var resolvedIdStr="";var rule=contextRules[uniIdStr];if(parentContext) {switch(kind) {case"<key>":if((parentContext[0]==="<class>")&&("<classKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<classKey>"]);} else if((parentContext[0]==="<event>")&&("<eventKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<eventKey>"]);} break;case"<enumValue>":if((parentContext[0]==="<enumType>")&&("<typeValue>"in rule)) {resolvedIdStr=resolveIdStr(rule["<typeValue>"]);} break;}} if(resolvedIdStr!=="") {uniIdStr=resolvedIdStr;} else if(kind in rule) {uniIdStr=rule[kind];}} else {var stringIDStr=app.typeIDToStringID(id);if(stringIDStr!=="") {uniIdStr=stringIDStr;}}}} return uniIdStr;} var incompatiblePlatformPath="";var getEventId=app.stringIDToTypeID("get");var targetKeyId=app.stringIDToTypeID("target");var propertyClassId=app.stringIDToTypeID("property");function getFromReference(ref) {var propertyId=0;var arr=[];do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(propertyId!==0) {var propertyCompact=that.buildCompact("<property>",getFromId(["<key>",propertyId],["<class>",desiredClassId]));arr.push(that.buildCompact(getFromId(["<class>",propertyClassId]),propertyCompact));propertyId=0;} var desiredCompact;var aFormID=ref.getForm();switch(aFormID) {case ReferenceFormType.CLASSTYPE:desiredCompact=that.buildCompact("<class>",null);break;case ReferenceFormType.ENUMERATED:var enumTypeContext=["<enumType>",ref.getEnumeratedType()];var enumValueContext=["<enumValue>",ref.getEnumeratedValue()];desiredCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case ReferenceFormType.IDENTIFIER:desiredCompact=that.buildCompact("<identifier>",ref.getIdentifier());break;case ReferenceFormType.INDEX:desiredCompact=that.buildCompact("<index>",ref.getIndex());break;case ReferenceFormType.NAME:desiredCompact=that.buildCompact("<name>",ref.getName());break;case ReferenceFormType.OFFSET:desiredCompact=that.buildCompact("<offset>",ref.getOffset());break;case ReferenceFormType.PROPERTY:if(desiredClassId===propertyClassId) {propertyId=ref.getProperty();} else {desiredCompact=that.buildCompact("<property>",getFromId(["<key>",ref.getProperty()],["<class>",desiredClassId]));} break;default:throw new Error("[jamEngine getFromReference] Unknown reference form type: "+aFormID);break;} if(desiredClassId!==propertyClassId) {arr.push(that.buildCompact(getFromId(["<class>",desiredClassId]),desiredCompact));} ref=ref.getContainer();} while(ref);return arr;} function getFromList(list) {var arr=[];var itemCount=list.count;for(var itemIndex=0;itemIndex<itemCount;itemIndex++) {var itemCompact;var typeID;try{typeID=list.getType(itemIndex);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:itemCompact=that.buildCompact("<boolean>",list.getBoolean(itemIndex));break;case DescValueType.CLASSTYPE:itemCompact=that.buildCompact("<class>",getFromId(["<class>",list.getClass(itemIndex)]));break;case DescValueType.DOUBLETYPE:itemCompact=that.buildCompact("<double>",list.getDouble(itemIndex));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",list.getEnumerationType(itemIndex)];var enumValueContext=["<enumValue>",list.getEnumerationValue(itemIndex)];itemCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:itemCompact=that.buildCompact("<integer>",list.getInteger(itemIndex));break;case DescValueType.LISTTYPE:itemCompact=that.buildCompact("<list>",getFromList(list.getList(itemIndex)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",list.getObjectType(itemIndex)];var objectValue=list.getObjectValue(itemIndex);itemCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=list.getPath(itemIndex);itemCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {itemCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:itemCompact=that.buildCompact("<reference>",getFromReference(list.getReference(itemIndex)));break;case DescValueType.STRINGTYPE:itemCompact=that.buildCompact("<string>",list.getString(itemIndex));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",list.getUnitDoubleType(itemIndex)];var doubleValue=list.getUnitDoubleValue(itemIndex);itemCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {itemCompact=that.buildCompact("<data>",list.getData(itemIndex));} else if(isLargeIntegerType) {itemCompact=that.buildCompact("<largeInteger>",list.getLargeInteger(itemIndex));} else {throw new Error("[jamEngine getFromList] Unknown descriptor value type: "+typeID);} break;} arr[itemIndex]=itemCompact;} return arr;} function getFromDescriptor(desc,parentContext) {if(desc) {var obj={};var keyCount;try{keyCount=desc.count;}catch(e){return null;} for(var keyIndex=0;keyIndex<keyCount;keyIndex++) {var keyID=desc.getKey(keyIndex);var keyString=getFromId(["<key>",keyID],parentContext);var keyCompact;var typeID;try{typeID=desc.getType(keyID);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:keyCompact=that.buildCompact("<boolean>",desc.getBoolean(keyID));break;case DescValueType.CLASSTYPE:keyCompact=that.buildCompact("<class>",getFromId(["<class>",desc.getClass(keyID)]));break;case DescValueType.DOUBLETYPE:keyCompact=that.buildCompact("<double>",desc.getDouble(keyID));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",desc.getEnumerationType(keyID)];var enumValueContext=["<enumValue>",desc.getEnumerationValue(keyID)];keyCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:keyCompact=that.buildCompact("<integer>",desc.getInteger(keyID));break;case DescValueType.LISTTYPE:keyCompact=that.buildCompact("<list>",getFromList(desc.getList(keyID)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",desc.getObjectType(keyID)];var objectValue=desc.getObjectValue(keyID);keyCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=desc.getPath(keyID);keyCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {keyCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:keyCompact=that.buildCompact("<reference>",getFromReference(desc.getReference(keyID)));break;case DescValueType.STRINGTYPE:keyCompact=that.buildCompact("<string>",desc.getString(keyID));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",desc.getUnitDoubleType(keyID)];var doubleValue=desc.getUnitDoubleValue(keyID);keyCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {keyCompact=that.buildCompact("<data>",desc.getData(keyID));} else if(isLargeIntegerType) {keyCompact=that.buildCompact("<largeInteger>",desc.getLargeInteger(keyID));} else {throw new Error("[jamEngine getFromDescriptor] Unknown descriptor value type: "+typeID);} break;} obj[keyString]=keyCompact;} return obj;} else {return null;}} jamEngine.jsonToActionDescriptor=function(descriptorObj) {that=this;var actionDescriptor;if(descriptorObj) {actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,descriptorObj);} return actionDescriptor;};jamEngine.jsonToActionReference=function(referenceArr) {that=this;var actionReference;if(referenceArr) {actionReference=new ActionReference();putInReference(actionReference,referenceArr);} return actionReference;};jamEngine.eventIdAndActionDescriptorToJson=function(eventId,actionDescriptor) {that=this;var eventIdContext=["<event>",eventId];return{"<event>":getFromId(eventIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,eventIdContext)};};jamEngine.classIdAndActionDescriptorToJson=function(classId,actionDescriptor) {that=this;var classIdContext=["<class>",classId];return{"<class>":getFromId(classIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,classIdContext)};};jamEngine.actionReferenceToJson=function(actionReference) {that=this;return getFromReference(actionReference);};function getReferenceClassId(ref) {classId=0;do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(desiredClassId!==propertyClassId) {classId=desiredClassId;break;} ref=ref.getContainer();} while(ref);return classId;} jamEngine.jsonPlay=function(eventUniIdStr,descriptorObj,displayDialogs) {var eventId=this.uniIdStrToId(eventUniIdStr);var desc=this.jsonToActionDescriptor(descriptorObj);var parentContext;if(eventId===getEventId) {var ref=desc.getReference(targetKeyId);parentContext=["<class>",getReferenceClassId(ref)];} else {parentContext=["<event>",eventId];} return getFromDescriptor(app.executeAction(eventId,desc,displayDialogs||this.displayDialogs),parentContext);};jamEngine.jsonGet=function(referenceArr) {var ref=this.jsonToActionReference(referenceArr);return getFromDescriptor(app.executeActionGet(ref),["<class>",getReferenceClassId(ref)]);};jamEngine.normalizeJsonItem=function(item,options) {function normalizeItem(item) {var explicit=that.parseCompact(item);var type=explicit[0];var value=explicit[1];var normalizedValue;switch(type) {case"<boolean>":case"<data>":case"<double>":case"<identifier>":case"<index>":case"<integer>":case"<largeInteger>":case"<name>":case"<offset>":case"<path>":case"<string>":normalizedValue=value;break;case"<class>":normalizedValue=value&&getFromId(["<class>",that.uniIdStrToId(value)]);break;case"<enumerated>":var enumerated=that.parseCompact(value);var enumTypeContext=["<enumType>",that.uniIdStrToId(enumerated[0])];var enumValueContext=["<enumValue>",that.uniIdStrToId(enumerated[1])];normalizedValue=that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext));break;case"<list>":normalizedValue=[];for(var i=0;i<value.length;i++) {normalizedValue.push(normalizeItem(value[i]));} break;case"<object>":var object=that.parseCompact(value);var objectClassContext=["<class>",that.uniIdStrToId(object[0])];var objectDescriptor=object[1];var normalizedDescriptor;if(objectDescriptor===null) {normalizedDescriptor=null;} else {normalizedDescriptor={};for(var key in objectDescriptor) {if(objectDescriptor.hasOwnProperty(key)) {var objectKeyContext=["<key>",that.uniIdStrToId(key)];normalizedDescriptor[getFromId(objectKeyContext,objectClassContext)]=normalizeItem(objectDescriptor[key]);}}} normalizedValue=that.buildCompact(getFromId(objectClassContext),normalizedDescriptor);break;case"<property>":normalizedValue=getFromId(["<key>",that.uniIdStrToId(value)]);break;case"<reference>":normalizedValue=[];for(var i=0;i<value.length;i++) {var container=that.parseCompact(value[i]);normalizedValue.push(that.buildCompact(getFromId(["<class>",that.uniIdStrToId(container[0])]),normalizeItem(container[1])));} break;case"<unitDouble>":var unitDouble=that.parseCompact(value);var unitTypeContext=["<unit>",that.uniIdStrToId(unitDouble[0])];normalizedValue=that.buildCompact(getFromId(unitTypeContext),unitDouble[1]);break;default:throw new Error("[jamEngine.normalizeJsonItem] Unknown item type: "+type);break;} return that.buildCompact(type,normalizedValue);} that=this;var saveMeaningfulIds=this.meaningfulIds;var saveParseFriendly=this.parseFriendly;if(options&&(options.constructor===Object)) {if(typeof options.meaningfulIds!=='undefined') {this.meaningfulIds=options.meaningfulIds;} if(typeof options.parseFriendly!=='undefined') {this.parseFriendly=options.parseFriendly;}} var normalizedItem=normalizeItem(item);this.meaningfulIds=saveMeaningfulIds;this.parseFriendly=saveParseFriendly;return normalizedItem;};function simplifyRef(ref) {var simplifiedRef=[];for(var i=0;i<ref.length;i++) {var element=ref[i];var simplifiedElement={};var desiredClass=element[0];var form=element[1][0];var value=element[1][1];switch(form) {case"<class>":case"<identifier>":case"<index>":case"<name>":case"<offset>":case"<property":simplifiedElement[desiredClass]=value;break;case"<enumerated>":simplifiedElement[desiredClass]=value[1];break;default:throw new Error("[jamEngine simplifyRef] Unexpected element form: "+form);break;} simplifiedRef.push(simplifiedElement);} return simplifiedRef;} function simplifyItem(item,hook) {var simplifiedItem;var type=item[0];var value=item[1];switch(type) {case"<boolean>":case"<class>":case"<data>":case"<double>":case"<integer>":case"<largeInteger>":case"<path>":case"<string>":simplifiedItem=value;break;case"<list>":simplifiedItem=simplifyList(value,hook);break;case"<enumerated>":case"<unitDouble>":simplifiedItem=value[1];break;case"<object>":simplifiedItem=simplifyDesc(value[1],hook);break;case"<reference>":simplifiedItem=simplifyRef(value);break;default:throw new Error("[jamEngine simplifyItem] Unexpected item type: "+type);break;} return simplifiedItem;} function simplifyList(list,hook) {var simplifiedList=[];for(var i=0;i<list.length;i++) {simplifiedList.push(simplifyItem(list[i],hook));} return simplifiedList;} function simplifyDesc(desc,hook) {var getDefaultValue=function(desc,key){return simplifyItem(desc[key],hook);};var simplifiedDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=undefined;if(typeof hook==='function') {value=hook(desc,key,getDefaultValue);} if(typeof value==='undefined') {value=simplifyItem(desc[key],hook);} simplifiedDesc[key]=value;}} return simplifiedDesc;} jamEngine.simplifyObject=function(object,hookFunction) {return simplifyDesc((this.normalizeJsonItem(object,{meaningfulIds:true,parseFriendly:true}))[1][1],hookFunction);};jamEngine.simplifyList=function(list,hookFunction) {return simplifyList((this.normalizeJsonItem(list,{meaningfulIds:true,parseFriendly:true}))[1],hookFunction);};jamEngine.parseCompact=function(compact) {var result=[];if(compact.constructor===Object) {var keys=[];for(var k in compact) {if(compact.hasOwnProperty(k)) {keys.push(k);}} if(keys.length===1) {result[0]=keys[0];result[1]=compact[keys[0]];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else if(compact.constructor===Array) {if(compact.length===2) {result[0]=compact[0];result[1]=compact[1];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else {throw new Error("[jamEngine.parseCompact] JavaScript object or array expected");} return result;};jamEngine.compactToExplicit=function(compact,typeKey,valueKey) {var explicit={};var typeValue=this.parseCompact(compact);explicit[typeKey||"<type>"]=typeValue[0];explicit[valueKey||"<value>"]=typeValue[1];return explicit;};jamEngine.buildCompact=function(type,value) {var compact;if(typeof type==='string') {if(this.parseFriendly) {compact=[type,value];} else {compact={};compact[type]=value;}} else {throw new Error("[jamEngine.buildCompact] String expected");} return compact;};jamEngine.explicitToCompact=function(explicit,typeKey,valueKey) {var compact;if(explicit.constructor===Object) {compact=this.buildCompact(explicit[typeKey||"<type>"],explicit[valueKey||"<value>"]);} else {throw new Error("[jamEngine.explicitToCompact] JavaScript object expected");} return compact;};for(var charIdStr in conflictingStringIdStrs) {if(conflictingStringIdStrs.hasOwnProperty(charIdStr)) {var stringIdStrs=conflictingStringIdStrs[charIdStr];for(var index=stringIdStrs.length-1;index>=0;index--) {var stringIdStr=stringIdStrs[index];if(!(app.charIDToTypeID(charIdStr.substring(1,5))===app.stringIDToTypeID(stringIdStr))) {stringIdStrs.splice(index,1);}} if(stringIdStrs.length<2) {delete conflictingStringIdStrs[charIdStr];}}} for(var charIdStr in contextRules) {if(contextRules.hasOwnProperty(charIdStr)) {if(charIdStr in conflictingStringIdStrs) {var rule=contextRules[charIdStr];for(var kind in rule) {if(rule.hasOwnProperty(kind)) {switch(kind) {case"<class>":case"<event>":case"<enumType>":case"<enumValue>":case"<key>":case"<unknown>":if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind]+"\" are not equivalent ID strings");} break;case"<classKey>":case"<eventKey>":case"<typeValue>":for(var parent in rule[kind]) {if(rule[kind].hasOwnProperty(parent)) {if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind][parent])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind][parent]+"\" are not equivalent ID strings");}}} break;}}}} else {delete contextRules[charIdStr];}}}}());}

jamEngine.meaningfulIds = false;
jamEngine.parseFriendly = false;

// Action “Màu Hàn 04 Hồng”
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
				"<integer>": 1
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
				"<integer>": 48
			},
			"'LA_Y'":
			{
				"<integer>": 43
			},
			"'LA_G'":
			{
				"<integer>": 0
			},
			"'LA_A'":
			{
				"<integer>": 0
			},
			"'LA_B'":
			{
				"<integer>": -20
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
				"<integer>": 0
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
				"<double>": 0.65
			},
			"'Cr12'":
			{
				"<integer>": 20
			},
			"'Hi12'":
			{
				"<integer>": -51
			},
			"'Sh12'":
			{
				"<integer>": -8
			},
			"'Wh12'":
			{
				"<integer>": -42
			},
			"'Bk12'":
			{
				"<integer>": 3
			},
			"'Cl12'":
			{
				"<integer>": 0
			},
			"'DfPA'":
			{
				"<integer>": 5
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
						"<integer>": 251
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
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:PaintBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"-0.037500\"\n       crs:LocalContrast2012=\"0.380000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"1.000000\"\n          crs:Radius=\"0.340565\"\n          crs:Flow=\"0.986301\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.341383</rdf:li>\n           <rdf:li>d 0.853781 0.643390</rdf:li>\n           <rdf:li>r 0.341148</rdf:li>\n           <rdf:li>d 0.842411 0.744974</rdf:li>\n           <rdf:li>r 0.341085</rdf:li>\n           <rdf:li>d 0.828841 0.845852</rdf:li>\n           <rdf:li>r 0.340986</rdf:li>\n           <rdf:li>d 0.816912 0.946993</rdf:li>\n           <rdf:li>r 0.341079</rdf:li>\n           <rdf:li>d 0.751071 0.975118</rdf:li>\n           <rdf:li>r 0.341193</rdf:li>\n           <rdf:li>d 0.682625 0.978461</rdf:li>\n           <rdf:li>r 0.341537</rdf:li>\n           <rdf:li>d 0.614063 0.975530</rdf:li>\n           <rdf:li>r 0.341738</rdf:li>\n           <rdf:li>d 0.545427 0.972045</rdf:li>\n           <rdf:li>r 0.341771</rdf:li>\n           <rdf:li>d 0.476728 0.969875</rdf:li>\n           <rdf:li>r 0.341643</rdf:li>\n           <rdf:li>d 0.408029 0.969146</rdf:li>\n           <rdf:li>r 0.341328</rdf:li>\n           <rdf:li>d 0.339405 0.970700</rdf:li>\n           <rdf:li>r 0.341128</rdf:li>\n           <rdf:li>d 0.270886 0.971157</rdf:li>\n           <rdf:li>r 0.340996</rdf:li>\n           <rdf:li>d 0.202532 0.969908</rdf:li>\n           <rdf:li>r 0.340854</rdf:li>\n           <rdf:li>d 0.134415 0.968967</rdf:li>\n           <rdf:li>r 0.340718</rdf:li>\n           <rdf:li>d 0.066687 0.963256</rdf:li>\n           <rdf:li>r 0.340596</rdf:li>\n           <rdf:li>d 0.000416 0.943347</rdf:li>\n           <rdf:li>r 0.340695</rdf:li>\n           <rdf:li>d 0.062536 0.984363</rdf:li>\n           <rdf:li>r 0.340804</rdf:li>\n           <rdf:li>d 0.129093 1.004794</rdf:li>\n           <rdf:li>r 0.340914</rdf:li>\n           <rdf:li>d 0.196703 1.017649</rdf:li>\n           <rdf:li>r 0.341018</rdf:li>\n           <rdf:li>d 0.264793 1.026449</rdf:li>\n           <rdf:li>r 0.341108</rdf:li>\n           <rdf:li>d 0.333219 1.030491</rdf:li>\n           <rdf:li>r 0.341359</rdf:li>\n           <rdf:li>d 0.401760 1.034404</rdf:li>\n           <rdf:li>r 0.341525</rdf:li>\n           <rdf:li>d 0.470380 1.031696</rdf:li>\n           <rdf:li>r 0.341543</rdf:li>\n           <rdf:li>d 0.538888 1.024572</rdf:li>\n           <rdf:li>r 0.341395</rdf:li>\n           <rdf:li>d 0.607379 1.017328</rdf:li>\n           <rdf:li>r 0.341146</rdf:li>\n           <rdf:li>d 0.675598 1.006295</rdf:li>\n           <rdf:li>r 0.341058</rdf:li>\n           <rdf:li>d 0.743708 0.995150</rdf:li>\n           <rdf:li>r 0.340948</rdf:li>\n           <rdf:li>d 0.811561 0.982586</rdf:li>\n           <rdf:li>r 0.340821</rdf:li>\n           <rdf:li>d 0.879287 0.971428</rdf:li>\n           <rdf:li>r 0.340690</rdf:li>\n           <rdf:li>d 0.946830 0.962929</rdf:li>\n           <rdf:li>r 0.340565</rdf:li>\n           <rdf:li>d 1.013999 0.958456</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:PaintBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n"
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
							"<class>": "vibrance"
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
						"'AdjL'":
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
					"vibrance":
					{
						"vibrance":
						{
							"<integer>": 50
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
						"'AdjL'":
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
					"'Exps'":
					{
						"presetKind":
						{
							"<enumerated>":
							{
								"presetKindType": "presetKindCustom"
							}
						},
						"'Exps'":
						{
							"<double>": -0.02999999932945
						},
						"'Ofst'":
						{
							"<double>": 0.01869999989867
						},
						"gammaCorrection":
						{
							"<double>": 1.07000005245209
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
						"'AdjL'":
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
					"'SlcC'":
					{
						"presetKind":
						{
							"<enumerated>":
							{
								"presetKindType": "presetKindCustom"
							}
						},
						"'ClrC'":
						{
							"<list>":
							[
								{
									"<object>":
									{
										"'ClrC'":
										{
											"'Clrs'":
											{
												"<enumerated>":
												{
													"'Clrs'": "'Rds '"
												}
											},
											"'Cyn '":
											{
												"<unitDouble>":
												{
													"'#Prc'": 2
												}
											},
											"'Mgnt'":
											{
												"<unitDouble>":
												{
													"'#Prc'": 13
												}
											},
											"'Ylw '":
											{
												"<unitDouble>":
												{
													"'#Prc'": -29
												}
											},
											"'Blck'":
											{
												"<unitDouble>":
												{
													"'#Prc'": 2
												}
											}
										}
									}
								},
								{
									"<object>":
									{
										"'ClrC'":
										{
											"'Clrs'":
											{
												"<enumerated>":
												{
													"'Clrs'": "'Ylws'"
												}
											},
											"'Cyn '":
											{
												"<unitDouble>":
												{
													"'#Prc'": 27
												}
											},
											"'Mgnt'":
											{
												"<unitDouble>":
												{
													"'#Prc'": -10
												}
											},
											"'Ylw '":
											{
												"<unitDouble>":
												{
													"'#Prc'": -25
												}
											}
										}
									}
								},
								{
									"<object>":
									{
										"'ClrC'":
										{
											"'Clrs'":
											{
												"<enumerated>":
												{
													"'Clrs'": "'Grns'"
												}
											},
											"'Cyn '":
											{
												"<unitDouble>":
												{
													"'#Prc'": -100
												}
											}
										}
									}
								}
							]
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
						"'AdjL'":
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
					"'Crvs'":
					{
						"presetKind":
						{
							"<enumerated>":
							{
								"presetKindType": "presetKindCustom"
							}
						},
						"'Adjs'":
						{
							"<list>":
							[
								{
									"<object>":
									{
										"'CrvA'":
										{
											"'Chnl'":
											{
												"<reference>":
												[
													{
														"'Chnl'":
														{
															"<enumerated>":
															{
																"'Chnl'": "'Cmps'"
															}
														}
													}
												]
											},
											"'Crv '":
											{
												"<list>":
												[
													{
														"<object>":
														{
															"'Pnt '":
															{
																"'Hrzn'":
																{
																	"<double>": 0
																},
																"'Vrtc'":
																{
																	"<double>": 0
																}
															}
														}
													},
													{
														"<object>":
														{
															"'Pnt '":
															{
																"'Hrzn'":
																{
																	"<double>": 64
																},
																"'Vrtc'":
																{
																	"<double>": 52
																}
															}
														}
													},
													{
														"<object>":
														{
															"'Pnt '":
															{
																"'Hrzn'":
																{
																	"<double>": 129
																},
																"'Vrtc'":
																{
																	"<double>": 133
																}
															}
														}
													},
													{
														"<object>":
														{
															"'Pnt '":
															{
																"'Hrzn'":
																{
																	"<double>": 189
																},
																"'Vrtc'":
																{
																	"<double>": 193
																}
															}
														}
													},
													{
														"<object>":
														{
															"'Pnt '":
															{
																"'Hrzn'":
																{
																	"<double>": 255
																},
																"'Vrtc'":
																{
																	"<double>": 255
																}
															}
														}
													}
												]
											}
										}
									}
								}
							]
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
						"<integer>": 72
					},
					{
						"<integer>": 73
					},
					{
						"<integer>": 74
					},
					{
						"<integer>": 75
					},
					{
						"<integer>": 76
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
