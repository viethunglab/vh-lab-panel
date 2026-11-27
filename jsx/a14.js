// Application: C:\Program Files\Adobe\Adobe Photoshop CC 2019 (20.0.0)
// Date: 2021-11-25T13:31:43-08:00
// Actions file: C:\Users\NT Studio\Desktop\NT.atn
// Action set: NT

// jamEngine.jsxinc v4.4.4 (minified)
if(typeof jamEngine!=='object') {var jamEngine={};(function() {var that;jamEngine.meaningfulIds=false;jamEngine.parseFriendly=false;jamEngine.displayDialogs=DialogModes.ERROR;var conflictingStringIdStrs={"'Algn'":["align","alignment"],"'AntA'":["antiAlias","antiAliasedPICTAcquire"],"'BckL'":["backgroundLayer","backgroundLevel"],"'BlcG'":["blackGenerationType","blackGenerationCurve"],"'BlcL'":["blackLevel","blackLimit"],"'Blks'":["blacks","blocks"],"'BlrM'":["blurMethod","blurMore"],"'BrgC'":["brightnessEvent","brightnessContrast"],"'BrsD'":["brushDetail","brushesDefine"],"'Brsh'":["brush","brushes"],"'Clcl'":["calculation","calculations"],"'ClrP'":["colorPalette","coloredPencil"],"'Cnst'":["constant","constrain"],"'CntC'":["centerCropMarks","conteCrayon"],"'Cntr'":["center","contrast"],"'CrtD'":["createDroplet","createDuplicate"],"'CstP'":["customPalette","customPhosphors"],"'Cstm'":["custom","customPattern"],"'Drkn'":["darken","darkness"],"'Dstr'":["distort","distortion","distribute","distribution"],"'Dstt'":["desaturate","destWhiteMax"],"'FlIn'":["fileInfo","fillInverse"],"'Gd  '":["good","guide"],"'GnrP'":["generalPreferences","generalPrefs","preferencesClass"],"'GrSt'":["grainStippled","graySetup"],"'Grdn'":["gradientClassEvent","gridMinor"],"'Grn '":["grain","green"],"'Grns'":["graininess","greens"],"'HstP'":["historyPreferences","historyPrefs"],"'HstS'":["historyState","historyStateSourceType"],"'ImgP'":["imageCachePreferences","imagePoint"],"'In  '":["in","stampIn"],"'IntW'":["interfaceWhite","intersectWith"],"'Intr'":["interfaceIconFrameDimmed","interlace","interpolation","intersect"],"'JPEG'":["JPEG","JPEGFormat"],"'LghD'":["lightDirection","lightDirectional"],"'LghO'":["lightOmni","lightenOnly"],"'LghS'":["lightSource","lightSpot"],"'Lns '":["lens","lines"],"'Mgnt'":["magenta","magentas"],"'MrgL'":["mergeLayers","mergedLayers"],"'Mxm '":["maximum","maximumQuality"],"'NTSC'":["NTSC","NTSCColors"],"'NmbL'":["numberOfLayers","numberOfLevels"],"'PlgP'":["pluginPicker","pluginPrefs"],"'Pncl'":["pencilEraser","pencilWidth"],"'Pnt '":["paint","point"],"'Prsp'":["perspective","perspectiveIndex"],"'PrvM'":["previewMacThumbnail","previewMagenta"],"'Pstr'":["posterization","posterize"],"'RGBS'":["RGBSetup","RGBSetupSource"],"'Rds '":["radius","reds"],"'ScrD'":["scratchDisks","screenDot"],"'ShdI'":["shadingIntensity","shadowIntensity"],"'ShpC'":["shapeCurveType","shapingCurve"],"'ShrE'":["sharpenEdges","shearEd"],"'Shrp'":["sharpen","sharpness"],"'SplC'":["splitChannels","supplementalCategories"],"'Spot'":["spot","spotColor"],"'SprS'":["separationSetup","sprayedStrokes"],"'StrL'":["strokeLength","strokeLocation"],"'Strt'":["saturation","start"],"'TEXT'":["char","textType"],"'TIFF'":["TIFF","TIFFFormat"],"'TglO'":["toggleOptionsPalette","toggleOthers"],"'TrnG'":["transparencyGamutPreferences","transparencyGrid","transparencyGridSize"],"'TrnS'":["transferSpec","transparencyShape","transparencyStop"],"'Trns'":["transparency","transparent"],"'TxtC'":["textClickPoint","textureCoverage"],"'TxtF'":["textureFile","textureFill"],"'UsrM'":["userMaskEnabled","userMaskOptions"],"'c@#^'":["inherits","pInherits"],"'comp'":["comp","sInt64"],"'doub'":["floatType","IEEE64BitFloatingPoint","longFloat"],"'long'":["integer","longInteger","sInt32"],"'magn'":["magnitude","uInt32"],"'null'":["null","target"],"'shor'":["sInt16","sMInt","shortInteger"],"'sing'":["IEEE32BitFloatingPoint","sMFloat","shortFloat"]};jamEngine.getConflictingStringIdStrs=function(charIdStr) {return conflictingStringIdStrs[charIdStr]||null;};jamEngine.uniIdStrToId=function(uniIdStr) {var id=0;if(typeof uniIdStr==='string') {if((uniIdStr.length===(1+4+1))&&(uniIdStr.charAt(0)==="'")&&(uniIdStr.charAt(5)==="'")) {id=app.charIDToTypeID(uniIdStr.substring(1,5));} else {id=app.stringIDToTypeID(uniIdStr);}} return id;};var smallestHashValue=app.charIDToTypeID("    ");jamEngine.idToUniIdStrs=function(id) {var charIdStr="";var stringIdStr=app.typeIDToStringID(id);if(id>=smallestHashValue) {charIdStr="'"+app.typeIDToCharID(id)+"'";if(stringIdStr!=="") {if(charIdStr in conflictingStringIdStrs) {stringIdStr=conflictingStringIdStrs[charIdStr];}}} return[charIdStr,stringIdStr];};jamEngine.equivalentUniIdStrs=function(uniIdStr1,uniIdStr2) {return this.uniIdStrToId(uniIdStr1)===this.uniIdStrToId(uniIdStr2);};function putInReference(ref,containers) {if(containers.constructor===Array) {var count=containers.length;for(var i=0;i<count;i++) {var container=that.parseCompact(containers[i]);var desiredClassId=that.uniIdStrToId(container[0]);var typedValue=that.parseCompact(container[1]);var form=typedValue[0];var value=typedValue[1];switch(form) {case"<class>":ref.putClass(desiredClassId);break;case"<enumerated>":var enumerated=that.parseCompact(value);ref.putEnumerated(desiredClassId,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<identifier>":ref.putIdentifier(desiredClassId,value);break;case"<index>":ref.putIndex(desiredClassId,value);break;case"<name>":ref.putName(desiredClassId,value);break;case"<offset>":ref.putOffset(desiredClassId,value);break;case"<property>":ref.putProperty(desiredClassId,that.uniIdStrToId(value));break;default:throw new Error("[jamEngine putInReference] Unknown reference form: "+form);break;}}} else {throw new Error("[jamEngine putInReference] JavaScript array expected");}} function putInList(list,items) {if(items.constructor===Array) {var count=items.length;for(var i=0;i<count;i++) {var item=that.parseCompact(items[i]);var type=item[0];var value=item[1];switch(type) {case"<boolean>":list.putBoolean(value);break;case"<class>":list.putClass(that.uniIdStrToId(value));break;case"<data>":list.putData(value);break;case"<double>":list.putDouble(value);break;case"<enumerated>":var enumerated=that.parseCompact(value);list.putEnumerated(that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":list.putInteger(value);break;case"<largeInteger>":list.putLargeInteger(value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);list.putList(actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);list.putObject(that.uniIdStrToId(object[0]),actionDescriptor);} else {list.putClass(that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);list.putPath(fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);list.putReference(actionReference);break;case"<string>":list.putString(value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);list.putUnitDouble(that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInList] Unknown list type: "+type);break;}}} else {throw new Error("[jamEngine putInList] JavaScript array expected");}} function putInDescriptor(desc,members) {if(members.constructor===Object) {for(var key in members) {if(members.hasOwnProperty(key)) {var keyID=that.uniIdStrToId(key);var member=that.parseCompact(members[key]);var type=member[0];var value=member[1];switch(type) {case"<boolean>":desc.putBoolean(keyID,value);break;case"<class>":desc.putClass(keyID,that.uniIdStrToId(value));break;case"<data>":desc.putData(keyID,value);break;case"<double>":desc.putDouble(keyID,value);break;case"<enumerated>":var enumerated=that.parseCompact(value);desc.putEnumerated(keyID,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":desc.putInteger(keyID,value);break;case"<largeInteger>":desc.putLargeInteger(keyID,value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);desc.putList(keyID,actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);desc.putObject(keyID,that.uniIdStrToId(object[0]),actionDescriptor);} else {desc.putClass(keyID,that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);desc.putPath(keyID,fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);desc.putReference(keyID,actionReference);break;case"<string>":desc.putString(keyID,value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);desc.putUnitDouble(keyID,that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInDescriptor] Unknown descriptor type: "+type);break;}}}} else {throw new Error("[jamEngine putInDescriptor] JavaScript object expected");}} var contextRules={"'Algn'":{"<classKey>":{"bevelEmboss":"align","frameFX":"align","gradientFill":"align","gradientLayer":"align","patternFill":"align","patternLayer":"align"},"<event>":"align","<key>":"alignment"},"'AntA'":{"<class>":"antiAliasedPICTAcquire","<key>":"antiAlias"},"'BckL'":{"<class>":"backgroundLayer","<key>":"backgroundLevel"},"'BlcG'":{"<enumType>":"blackGenerationType","<key>":"blackGenerationCurve"},"'BlcL'":{"<classKey>":{"'GEfc'":"blackLevel","CMYKSetup":"blackLimit"},"<eventKey>":{"reticulation":"blackLevel"}},"'Blks'":{"<typeValue>":{"colors":"blacks","extrudeType":"blocks"}},"'BlrM'":{"<enumType>":"blurMethod","<event>":"blurMore","<key>":"blurMethod"},"'BrgC'":{"<class>":"brightnessContrast","<event>":"brightnessContrast"},"'BrsD'":{"<enumValue>":"brushesDefine","<key>":"brushDetail"},"'Brsh'":{"<class>":"brush","<key>":"brushes"},"'Clcl'":{"<class>":"calculation","<enumValue>":"calculations","<key>":"calculation"},"'ClrP'":{"<typeValue>":{"'GEft'":"coloredPencil"},"<enumType>":"colorPalette","<event>":"coloredPencil"},"'Cnst'":{"<classKey>":{"channelMatrix":"constant"},"<unknown>":"constrain"},"'CntC'":{"<typeValue>":{"'GEft'":"conteCrayon"},"<event>":"conteCrayon","<key>":"centerCropMarks"},"'Cntr'":{"<classKey>":{"'GEfc'":"contrast","brightnessContrast":"contrast","document":"center","polygon":"center","quadrilateral":"center"},"<eventKey>":{"adaptCorrect":"contrast","brightnessEvent":"contrast","grain":"contrast","halftoneScreen":"contrast","sumie":"contrast","tornEdges":"contrast","waterPaper":"contrast"},"<enumValue>":"center"},"'CrtD'":{"<enumValue>":"createDuplicate","<event>":"createDroplet"},"'CstP'":{"<class>":"customPhosphors","<key>":"customPalette"},"'Cstm'":{"<enumValue>":"customPattern","<event>":"custom","<key>":"custom"},"'Drkn'":{"<enumValue>":"darken","<key>":"darkness"},"'Dstr'":{"<classKey>":{"'GEfc'":"distortion"},"<eventKey>":{"glass":"distortion","addNoise":"distribution"},"<enumType>":"distribution","<enumValue>":"distort","<event>":"distribute"},"'Dstt'":{"<enumValue>":"desaturate","<event>":"desaturate","<key>":"destWhiteMax"},"'FlIn'":{"<typeValue>":{"fillColor":"fillInverse","menuItemType":"fileInfo"},"<class>":"fileInfo","<key>":"fileInfo"},"'Gd  '":{"<class>":"guide","<enumValue>":"good"},"'GnrP'":{"<class>":"preferencesClass","<enumValue>":"generalPreferences","<key>":"generalPrefs"},"'GrSt'":{"<class>":"graySetup","<enumValue>":"grainStippled","<key>":"graySetup"},"'Grdn'":{"<class>":"gradientClassEvent","<event>":"gradientClassEvent","<key>":"gridMinor"},"'Grn '":{"<typeValue>":{"'GEft'":"grain"},"<classKey>":{"'GEfc'":"grain","RGBColor":"green","blackAndWhite":"green","channelMatrix":"green","channelMixer":"green"},"<eventKey>":{"blackAndWhite":"green","channelMixer":"green","filmGrain":"grain"},"<enumValue>":"green","<event>":"grain"},"'Grns'":{"<enumValue>":"greens","<key>":"graininess"},"'HstP'":{"<enumValue>":"historyPreferences","<key>":"historyPrefs"},"'HstS'":{"<class>":"historyState","<enumType>":"historyStateSourceType"},"'ImgP'":{"<class>":"imagePoint","<enumValue>":"imageCachePreferences"},"'In  '":{"<enumValue>":"stampIn","<key>":"in"},"'IntW'":{"<event>":"intersectWith","<key>":"interfaceWhite"},"'Intr'":{"<typeValue>":{"shapeOperation":"intersect"},"<classKey>":{"GIFFormat":"interlace","SaveForWeb":"interlace","application":"interfaceIconFrameDimmed","computedBrush":"interpolation","dBrush":"interpolation","gradientClassEvent":"interpolation","photoshopEPSFormat":"interpolation","sampledBrush":"interpolation"},"<eventKey>":{"convertMode":"interpolation","imageSize":"interpolation","transform":"interpolation"},"<event>":"intersect"},"'JPEG'":{"<class>":"JPEGFormat","<enumValue>":"JPEG"},"'LghD'":{"<enumType>":"lightDirection","<enumValue>":"lightDirectional","<key>":"lightDirection"},"'LghO'":{"<typeValue>":{"diffuseMode":"lightenOnly","lightType":"lightOmni"}},"'LghS'":{"<class>":"lightSource","<enumValue>":"lightSpot","<key>":"lightSource"},"'Lns '":{"<enumType>":"lens","<enumValue>":"lines","<key>":"lens"},"'Mgnt'":{"<typeValue>":{"channel":"magenta","colors":"magentas","guideGridColor":"magenta"},"<key>":"magenta"},"'MrgL'":{"<enumValue>":"mergedLayers","<event>":"mergeLayers"},"'Mxm '":{"<enumValue>":"maximumQuality","<event>":"maximum","<key>":"maximum"},"'NTSC'":{"<enumValue>":"NTSC","<event>":"NTSCColors"},"'NmbL'":{"<classKey>":{"'GEfc'":"numberOfLevels","document":"numberOfLayers"},"<eventKey>":{"cutout":"numberOfLevels"}},"'PlgP'":{"<class>":"pluginPrefs","<enumValue>":"pluginPicker","<key>":"pluginPrefs"},"'Pncl'":{"<enumValue>":"pencilEraser","<key>":"pencilWidth"},"'Pnt '":{"<typeValue>":{"textType":"point"},"<class>":"point","<event>":"paint"},"'Prsp'":{"<enumValue>":"perspective","<key>":"perspectiveIndex"},"'PrvM'":{"<enumValue>":"previewMagenta","<key>":"previewMacThumbnail"},"'Pstr'":{"<class>":"posterize","<event>":"posterize","<key>":"posterization"},"'RGBS'":{"<enumType>":"RGBSetupSource","<key>":"RGBSetup"},"'Rds '":{"<enumValue>":"reds","<key>":"radius"},"'ScrD'":{"<enumValue>":"screenDot","<key>":"scratchDisks"},"'ShdI'":{"<classKey>":{"'GEfc'":"shadowIntensity"},"<eventKey>":{"watercolor":"shadowIntensity"},"<unknown>":"shadingIntensity"},"'ShpC'":{"<classKey>":{"application":"shapingCurve"},"<class>":"shapingCurve","<key>":"shapeCurveType"},"'ShrE'":{"<event>":"sharpenEdges","<key>":"shearEd"},"'Shrp'":{"<event>":"sharpen","<key>":"sharpness"},"'SplC'":{"<event>":"splitChannels","<key>":"supplementalCategories"},"'Spot'":{"<enumValue>":"spotColor","<key>":"spot"},"'SprS'":{"<typeValue>":{"'GEft'":"sprayedStrokes"},"<enumValue>":"separationSetup","<event>":"sprayedStrokes"},"'StrL'":{"<enumType>":"strokeLocation","<key>":"strokeLength"},"'Strt'":{"<classKey>":{"currentToolOptions":"saturation","fileNamingRules":"start","HSBColorClass":"saturation","hueSatAdjustment":"saturation","hueSatAdjustmentV2":"saturation","lineClass":"start","range":"start","vibrance":"saturation"},"<eventKey>":{"replaceColor":"saturation","variations":"saturation","vibrance":"saturation"},"<enumValue>":"saturation"},"'TEXT'":{"<enumType>":"textType","<key>":"textType"},"'TIFF'":{"<class>":"TIFFFormat","<enumValue>":"TIFF"},"'TglO'":{"<enumValue>":"toggleOptionsPalette","<key>":"toggleOthers"},"'TrnG'":{"<classKey>":{"application":"transparencyGrid","transparencyPrefs":"transparencyGridSize"},"<enumType>":"transparencyGridSize","<enumValue>":"transparencyGamutPreferences"},"'TrnS'":{"<classKey>":{"bevelEmboss":"transparencyShape","dropShadow":"transparencyShape","innerGlow":"transparencyShape","innerShadow":"transparencyShape","outerGlow":"transparencyShape"},"<class>":"transparencyStop","<unknown>":"transferSpec"},"'Trns'":{"<enumValue>":"transparent","<key>":"transparency"},"'TxtC'":{"<classKey>":{"'GEfc'":"textureCoverage","textLayer":"textClickPoint"},"<eventKey>":{"underpainting":"textureCoverage"}},"'TxtF'":{"<event>":"textureFill","<key>":"textureFile"},"'UsrM'":{"<enumType>":"userMaskOptions","<key>":"userMaskEnabled"},"'null'":{"<class>":"null","<enumValue>":"null","<event>":"null","<key>":"target"}};function getFromId(context,parentContext) {var uniIdStr;var kind=context[0];var id=context[1];if(id<smallestHashValue) {uniIdStr=app.typeIDToStringID(id);} else {uniIdStr="'"+app.typeIDToCharID(id)+"'";if(that.meaningfulIds) {if(uniIdStr in contextRules) {function resolveIdStr(candidates) {var idStr="";for(var parentString in candidates) {if(candidates.hasOwnProperty(parentString)) {if(parentContext[1]===that.uniIdStrToId(parentString)) {idStr=candidates[parentString];break;}}} return idStr;} var resolvedIdStr="";var rule=contextRules[uniIdStr];if(parentContext) {switch(kind) {case"<key>":if((parentContext[0]==="<class>")&&("<classKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<classKey>"]);} else if((parentContext[0]==="<event>")&&("<eventKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<eventKey>"]);} break;case"<enumValue>":if((parentContext[0]==="<enumType>")&&("<typeValue>"in rule)) {resolvedIdStr=resolveIdStr(rule["<typeValue>"]);} break;}} if(resolvedIdStr!=="") {uniIdStr=resolvedIdStr;} else if(kind in rule) {uniIdStr=rule[kind];}} else {var stringIDStr=app.typeIDToStringID(id);if(stringIDStr!=="") {uniIdStr=stringIDStr;}}}} return uniIdStr;} var incompatiblePlatformPath="";var getEventId=app.stringIDToTypeID("get");var targetKeyId=app.stringIDToTypeID("target");var propertyClassId=app.stringIDToTypeID("property");function getFromReference(ref) {var propertyId=0;var arr=[];do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(propertyId!==0) {var propertyCompact=that.buildCompact("<property>",getFromId(["<key>",propertyId],["<class>",desiredClassId]));arr.push(that.buildCompact(getFromId(["<class>",propertyClassId]),propertyCompact));propertyId=0;} var desiredCompact;var aFormID=ref.getForm();switch(aFormID) {case ReferenceFormType.CLASSTYPE:desiredCompact=that.buildCompact("<class>",null);break;case ReferenceFormType.ENUMERATED:var enumTypeContext=["<enumType>",ref.getEnumeratedType()];var enumValueContext=["<enumValue>",ref.getEnumeratedValue()];desiredCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case ReferenceFormType.IDENTIFIER:desiredCompact=that.buildCompact("<identifier>",ref.getIdentifier());break;case ReferenceFormType.INDEX:desiredCompact=that.buildCompact("<index>",ref.getIndex());break;case ReferenceFormType.NAME:desiredCompact=that.buildCompact("<name>",ref.getName());break;case ReferenceFormType.OFFSET:desiredCompact=that.buildCompact("<offset>",ref.getOffset());break;case ReferenceFormType.PROPERTY:if(desiredClassId===propertyClassId) {propertyId=ref.getProperty();} else {desiredCompact=that.buildCompact("<property>",getFromId(["<key>",ref.getProperty()],["<class>",desiredClassId]));} break;default:throw new Error("[jamEngine getFromReference] Unknown reference form type: "+aFormID);break;} if(desiredClassId!==propertyClassId) {arr.push(that.buildCompact(getFromId(["<class>",desiredClassId]),desiredCompact));} ref=ref.getContainer();} while(ref);return arr;} function getFromList(list) {var arr=[];var itemCount=list.count;for(var itemIndex=0;itemIndex<itemCount;itemIndex++) {var itemCompact;var typeID;try{typeID=list.getType(itemIndex);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:itemCompact=that.buildCompact("<boolean>",list.getBoolean(itemIndex));break;case DescValueType.CLASSTYPE:itemCompact=that.buildCompact("<class>",getFromId(["<class>",list.getClass(itemIndex)]));break;case DescValueType.DOUBLETYPE:itemCompact=that.buildCompact("<double>",list.getDouble(itemIndex));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",list.getEnumerationType(itemIndex)];var enumValueContext=["<enumValue>",list.getEnumerationValue(itemIndex)];itemCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:itemCompact=that.buildCompact("<integer>",list.getInteger(itemIndex));break;case DescValueType.LISTTYPE:itemCompact=that.buildCompact("<list>",getFromList(list.getList(itemIndex)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",list.getObjectType(itemIndex)];var objectValue=list.getObjectValue(itemIndex);itemCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=list.getPath(itemIndex);itemCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {itemCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:itemCompact=that.buildCompact("<reference>",getFromReference(list.getReference(itemIndex)));break;case DescValueType.STRINGTYPE:itemCompact=that.buildCompact("<string>",list.getString(itemIndex));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",list.getUnitDoubleType(itemIndex)];var doubleValue=list.getUnitDoubleValue(itemIndex);itemCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {itemCompact=that.buildCompact("<data>",list.getData(itemIndex));} else if(isLargeIntegerType) {itemCompact=that.buildCompact("<largeInteger>",list.getLargeInteger(itemIndex));} else {throw new Error("[jamEngine getFromList] Unknown descriptor value type: "+typeID);} break;} arr[itemIndex]=itemCompact;} return arr;} function getFromDescriptor(desc,parentContext) {if(desc) {var obj={};var keyCount;try{keyCount=desc.count;}catch(e){return null;} for(var keyIndex=0;keyIndex<keyCount;keyIndex++) {var keyID=desc.getKey(keyIndex);var keyString=getFromId(["<key>",keyID],parentContext);var keyCompact;var typeID;try{typeID=desc.getType(keyID);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:keyCompact=that.buildCompact("<boolean>",desc.getBoolean(keyID));break;case DescValueType.CLASSTYPE:keyCompact=that.buildCompact("<class>",getFromId(["<class>",desc.getClass(keyID)]));break;case DescValueType.DOUBLETYPE:keyCompact=that.buildCompact("<double>",desc.getDouble(keyID));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",desc.getEnumerationType(keyID)];var enumValueContext=["<enumValue>",desc.getEnumerationValue(keyID)];keyCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:keyCompact=that.buildCompact("<integer>",desc.getInteger(keyID));break;case DescValueType.LISTTYPE:keyCompact=that.buildCompact("<list>",getFromList(desc.getList(keyID)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",desc.getObjectType(keyID)];var objectValue=desc.getObjectValue(keyID);keyCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=desc.getPath(keyID);keyCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {keyCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:keyCompact=that.buildCompact("<reference>",getFromReference(desc.getReference(keyID)));break;case DescValueType.STRINGTYPE:keyCompact=that.buildCompact("<string>",desc.getString(keyID));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",desc.getUnitDoubleType(keyID)];var doubleValue=desc.getUnitDoubleValue(keyID);keyCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {keyCompact=that.buildCompact("<data>",desc.getData(keyID));} else if(isLargeIntegerType) {keyCompact=that.buildCompact("<largeInteger>",desc.getLargeInteger(keyID));} else {throw new Error("[jamEngine getFromDescriptor] Unknown descriptor value type: "+typeID);} break;} obj[keyString]=keyCompact;} return obj;} else {return null;}} jamEngine.jsonToActionDescriptor=function(descriptorObj) {that=this;var actionDescriptor;if(descriptorObj) {actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,descriptorObj);} return actionDescriptor;};jamEngine.jsonToActionReference=function(referenceArr) {that=this;var actionReference;if(referenceArr) {actionReference=new ActionReference();putInReference(actionReference,referenceArr);} return actionReference;};jamEngine.eventIdAndActionDescriptorToJson=function(eventId,actionDescriptor) {that=this;var eventIdContext=["<event>",eventId];return{"<event>":getFromId(eventIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,eventIdContext)};};jamEngine.classIdAndActionDescriptorToJson=function(classId,actionDescriptor) {that=this;var classIdContext=["<class>",classId];return{"<class>":getFromId(classIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,classIdContext)};};jamEngine.actionReferenceToJson=function(actionReference) {that=this;return getFromReference(actionReference);};function getReferenceClassId(ref) {classId=0;do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(desiredClassId!==propertyClassId) {classId=desiredClassId;break;} ref=ref.getContainer();} while(ref);return classId;} jamEngine.jsonPlay=function(eventUniIdStr,descriptorObj,displayDialogs) {var eventId=this.uniIdStrToId(eventUniIdStr);var desc=this.jsonToActionDescriptor(descriptorObj);var parentContext;if(eventId===getEventId) {var ref=desc.getReference(targetKeyId);parentContext=["<class>",getReferenceClassId(ref)];} else {parentContext=["<event>",eventId];} return getFromDescriptor(app.executeAction(eventId,desc,displayDialogs||this.displayDialogs),parentContext);};jamEngine.jsonGet=function(referenceArr) {var ref=this.jsonToActionReference(referenceArr);return getFromDescriptor(app.executeActionGet(ref),["<class>",getReferenceClassId(ref)]);};jamEngine.normalizeJsonItem=function(item,options) {function normalizeItem(item) {var explicit=that.parseCompact(item);var type=explicit[0];var value=explicit[1];var normalizedValue;switch(type) {case"<boolean>":case"<data>":case"<double>":case"<identifier>":case"<index>":case"<integer>":case"<largeInteger>":case"<name>":case"<offset>":case"<path>":case"<string>":normalizedValue=value;break;case"<class>":normalizedValue=value&&getFromId(["<class>",that.uniIdStrToId(value)]);break;case"<enumerated>":var enumerated=that.parseCompact(value);var enumTypeContext=["<enumType>",that.uniIdStrToId(enumerated[0])];var enumValueContext=["<enumValue>",that.uniIdStrToId(enumerated[1])];normalizedValue=that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext));break;case"<list>":normalizedValue=[];for(var i=0;i<value.length;i++) {normalizedValue.push(normalizeItem(value[i]));} break;case"<object>":var object=that.parseCompact(value);var objectClassContext=["<class>",that.uniIdStrToId(object[0])];var objectDescriptor=object[1];var normalizedDescriptor;if(objectDescriptor===null) {normalizedDescriptor=null;} else {normalizedDescriptor={};for(var key in objectDescriptor) {if(objectDescriptor.hasOwnProperty(key)) {var objectKeyContext=["<key>",that.uniIdStrToId(key)];normalizedDescriptor[getFromId(objectKeyContext,objectClassContext)]=normalizeItem(objectDescriptor[key]);}}} normalizedValue=that.buildCompact(getFromId(objectClassContext),normalizedDescriptor);break;case"<property>":normalizedValue=getFromId(["<key>",that.uniIdStrToId(value)]);break;case"<reference>":normalizedValue=[];for(var i=0;i<value.length;i++) {var container=that.parseCompact(value[i]);normalizedValue.push(that.buildCompact(getFromId(["<class>",that.uniIdStrToId(container[0])]),normalizeItem(container[1])));} break;case"<unitDouble>":var unitDouble=that.parseCompact(value);var unitTypeContext=["<unit>",that.uniIdStrToId(unitDouble[0])];normalizedValue=that.buildCompact(getFromId(unitTypeContext),unitDouble[1]);break;default:throw new Error("[jamEngine.normalizeJsonItem] Unknown item type: "+type);break;} return that.buildCompact(type,normalizedValue);} that=this;var saveMeaningfulIds=this.meaningfulIds;var saveParseFriendly=this.parseFriendly;if(options&&(options.constructor===Object)) {if(typeof options.meaningfulIds!=='undefined') {this.meaningfulIds=options.meaningfulIds;} if(typeof options.parseFriendly!=='undefined') {this.parseFriendly=options.parseFriendly;}} var normalizedItem=normalizeItem(item);this.meaningfulIds=saveMeaningfulIds;this.parseFriendly=saveParseFriendly;return normalizedItem;};function simplifyRef(ref) {var simplifiedRef=[];for(var i=0;i<ref.length;i++) {var element=ref[i];var simplifiedElement={};var desiredClass=element[0];var form=element[1][0];var value=element[1][1];switch(form) {case"<class>":case"<identifier>":case"<index>":case"<name>":case"<offset>":case"<property":simplifiedElement[desiredClass]=value;break;case"<enumerated>":simplifiedElement[desiredClass]=value[1];break;default:throw new Error("[jamEngine simplifyRef] Unexpected element form: "+form);break;} simplifiedRef.push(simplifiedElement);} return simplifiedRef;} function simplifyItem(item,hook) {var simplifiedItem;var type=item[0];var value=item[1];switch(type) {case"<boolean>":case"<class>":case"<data>":case"<double>":case"<integer>":case"<largeInteger>":case"<path>":case"<string>":simplifiedItem=value;break;case"<list>":simplifiedItem=simplifyList(value,hook);break;case"<enumerated>":case"<unitDouble>":simplifiedItem=value[1];break;case"<object>":simplifiedItem=simplifyDesc(value[1],hook);break;case"<reference>":simplifiedItem=simplifyRef(value);break;default:throw new Error("[jamEngine simplifyItem] Unexpected item type: "+type);break;} return simplifiedItem;} function simplifyList(list,hook) {var simplifiedList=[];for(var i=0;i<list.length;i++) {simplifiedList.push(simplifyItem(list[i],hook));} return simplifiedList;} function simplifyDesc(desc,hook) {var getDefaultValue=function(desc,key){return simplifyItem(desc[key],hook);};var simplifiedDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=undefined;if(typeof hook==='function') {value=hook(desc,key,getDefaultValue);} if(typeof value==='undefined') {value=simplifyItem(desc[key],hook);} simplifiedDesc[key]=value;}} return simplifiedDesc;} jamEngine.simplifyObject=function(object,hookFunction) {return simplifyDesc((this.normalizeJsonItem(object,{meaningfulIds:true,parseFriendly:true}))[1][1],hookFunction);};jamEngine.simplifyList=function(list,hookFunction) {return simplifyList((this.normalizeJsonItem(list,{meaningfulIds:true,parseFriendly:true}))[1],hookFunction);};jamEngine.parseCompact=function(compact) {var result=[];if(compact.constructor===Object) {var keys=[];for(var k in compact) {if(compact.hasOwnProperty(k)) {keys.push(k);}} if(keys.length===1) {result[0]=keys[0];result[1]=compact[keys[0]];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else if(compact.constructor===Array) {if(compact.length===2) {result[0]=compact[0];result[1]=compact[1];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else {throw new Error("[jamEngine.parseCompact] JavaScript object or array expected");} return result;};jamEngine.compactToExplicit=function(compact,typeKey,valueKey) {var explicit={};var typeValue=this.parseCompact(compact);explicit[typeKey||"<type>"]=typeValue[0];explicit[valueKey||"<value>"]=typeValue[1];return explicit;};jamEngine.buildCompact=function(type,value) {var compact;if(typeof type==='string') {if(this.parseFriendly) {compact=[type,value];} else {compact={};compact[type]=value;}} else {throw new Error("[jamEngine.buildCompact] String expected");} return compact;};jamEngine.explicitToCompact=function(explicit,typeKey,valueKey) {var compact;if(explicit.constructor===Object) {compact=this.buildCompact(explicit[typeKey||"<type>"],explicit[valueKey||"<value>"]);} else {throw new Error("[jamEngine.explicitToCompact] JavaScript object expected");} return compact;};for(var charIdStr in conflictingStringIdStrs) {if(conflictingStringIdStrs.hasOwnProperty(charIdStr)) {var stringIdStrs=conflictingStringIdStrs[charIdStr];for(var index=stringIdStrs.length-1;index>=0;index--) {var stringIdStr=stringIdStrs[index];if(!(app.charIDToTypeID(charIdStr.substring(1,5))===app.stringIDToTypeID(stringIdStr))) {stringIdStrs.splice(index,1);}} if(stringIdStrs.length<2) {delete conflictingStringIdStrs[charIdStr];}}} for(var charIdStr in contextRules) {if(contextRules.hasOwnProperty(charIdStr)) {if(charIdStr in conflictingStringIdStrs) {var rule=contextRules[charIdStr];for(var kind in rule) {if(rule.hasOwnProperty(kind)) {switch(kind) {case"<class>":case"<event>":case"<enumType>":case"<enumValue>":case"<key>":case"<unknown>":if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind]+"\" are not equivalent ID strings");} break;case"<classKey>":case"<eventKey>":case"<typeValue>":for(var parent in rule[kind]) {if(rule[kind].hasOwnProperty(parent)) {if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind][parent])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind][parent]+"\" are not equivalent ID strings");}}} break;}}}} else {delete contextRules[charIdStr];}}}}());}

jamEngine.meaningfulIds = false;
jamEngine.parseFriendly = false;

// Action “Màu Hàn 15”
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
					"'WBal'": "'AsSh'"
				}
			},
			"'Temp'":
			{
				"<integer>": 0
			},
			"'Tint'":
			{
				"<integer>": 0
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
				"<integer>": 34
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
				"<integer>": -3
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
				"<integer>": -12
			},
			"'SA_Y'":
			{
				"<integer>": 100
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
				"<integer>": 15
			},
			"'LA_O'":
			{
				"<integer>": 37
			},
			"'LA_Y'":
			{
				"<integer>": 2
			},
			"'LA_G'":
			{
				"<integer>": 0
			},
			"'LA_A'":
			{
				"<integer>": -23
			},
			"'LA_B'":
			{
				"<integer>": -13
			},
			"'LA_P'":
			{
				"<integer>": 19
			},
			"'LA_M'":
			{
				"<integer>": 26
			},
			"'STSH'":
			{
				"<integer>": 0
			},
			"'STSS'":
			{
				"<integer>": 0
			},
			"'STHH'":
			{
				"<integer>": 0
			},
			"'STHS'":
			{
				"<integer>": 0
			},
			"'STB '":
			{
				"<integer>": 0
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
				"<double>": 0.15
			},
			"'Cr12'":
			{
				"<integer>": 0
			},
			"'Hi12'":
			{
				"<integer>": -28
			},
			"'Sh12'":
			{
				"<integer>": 23
			},
			"'Wh12'":
			{
				"<integer>": -8
			},
			"'Bk12'":
			{
				"<integer>": 0
			},
			"'Cl12'":
			{
				"<integer>": 0
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
						"<integer>": 193
					},
					{
						"<integer>": 198
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
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:PaintBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.125000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.078978\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.603687 0.264977</rdf:li>\n           <rdf:li>d 0.596623 0.286169</rdf:li>\n           <rdf:li>d 0.589559 0.307361</rdf:li>\n           <rdf:li>d 0.584301 0.329703</rdf:li>\n           <rdf:li>d 0.597201 0.316030</rdf:li>\n           <rdf:li>d 0.607754 0.298401</rdf:li>\n           <rdf:li>d 0.605512 0.321854</rdf:li>\n           <rdf:li>d 0.607325 0.298317</rdf:li>\n           <rdf:li>d 0.608276 0.274667</rdf:li>\n           <rdf:li>d 0.605256 0.251411</rdf:li>\n           <rdf:li>d 0.599419 0.229395</rdf:li>\n           <rdf:li>d 0.591399 0.208983</rdf:li>\n           <rdf:li>d 0.584190 0.187901</rdf:li>\n           <rdf:li>d 0.576516 0.167192</rdf:li>\n           <rdf:li>d 0.570022 0.145593</rdf:li>\n           <rdf:li>d 0.563299 0.124153</rdf:li>\n           <rdf:li>d 0.556427 0.102820</rdf:li>\n           <rdf:li>d 0.551404 0.080357</rdf:li>\n           <rdf:li>d 0.539447 0.064875</rdf:li>\n           <rdf:li>d 0.523680 0.063450</rdf:li>\n           <rdf:li>d 0.508012 0.060456</rdf:li>\n           <rdf:li>d 0.492389 0.056962</rdf:li>\n           <rdf:li>d 0.476766 0.053468</rdf:li>\n           <rdf:li>d 0.461467 0.047574</rdf:li>\n           <rdf:li>d 0.445974 0.042962</rdf:li>\n           <rdf:li>d 0.430480 0.038349</rdf:li>\n           <rdf:li>d 0.415638 0.030242</rdf:li>\n           <rdf:li>d 0.400467 0.023645</rdf:li>\n           <rdf:li>d 0.385296 0.017049</rdf:li>\n           <rdf:li>d 0.369961 0.011373</rdf:li>\n           <rdf:li>d 0.354737 0.005056</rdf:li>\n           <rdf:li>d 0.339405 -0.000640</rdf:li>\n           <rdf:li>d 0.323901 -0.005177</rdf:li>\n           <rdf:li>d 0.308144 -0.006816</rdf:li>\n           <rdf:li>d 0.292833 -0.000990</rdf:li>\n           <rdf:li>d 0.277225 0.002648</rdf:li>\n           <rdf:li>d 0.261772 0.007553</rdf:li>\n           <rdf:li>d 0.246490 0.013545</rdf:li>\n           <rdf:li>d 0.261727 0.007300</rdf:li>\n           <rdf:li>d 0.256239 0.029517</rdf:li>\n           <rdf:li>d 0.248413 0.050099</rdf:li>\n           <rdf:li>d 0.239760 0.069920</rdf:li>\n           <rdf:li>d 0.234537 0.092280</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.125000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.589862 0.186636</rdf:li>\n           <rdf:li>d 0.591311 0.206207</rdf:li>\n           <rdf:li>d 0.592060 0.225867</rdf:li>\n           <rdf:li>d 0.592808 0.245526</rdf:li>\n           <rdf:li>d 0.593789 0.265163</rdf:li>\n           <rdf:li>d 0.594114 0.284849</rdf:li>\n           <rdf:li>d 0.594438 0.304534</rdf:li>\n           <rdf:li>d 0.593439 0.324169</rdf:li>\n           <rdf:li>d 0.593157 0.343856</rdf:li>\n           <rdf:li>d 0.592206 0.363496</rdf:li>\n           <rdf:li>d 0.590898 0.383090</rdf:li>\n           <rdf:li>d 0.590075 0.402742</rdf:li>\n           <rdf:li>d 0.597025 0.386037</rdf:li>\n           <rdf:li>d 0.599866 0.366812</rdf:li>\n           <rdf:li>d 0.605154 0.348788</rdf:li>\n           <rdf:li>d 0.609923 0.330442</rdf:li>\n           <rdf:li>d 0.616024 0.313006</rdf:li>\n           <rdf:li>d 0.621950 0.295435</rdf:li>\n           <rdf:li>d 0.626597 0.277018</rdf:li>\n           <rdf:li>d 0.632436 0.259382</rdf:li>\n           <rdf:li>d 0.643556 0.248913</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.872504 0.493088</rdf:li>\n           <rdf:li>d 0.878879 0.510301</rdf:li>\n           <rdf:li>d 0.883796 0.528559</rdf:li>\n           <rdf:li>d 0.889515 0.546284</rdf:li>\n           <rdf:li>d 0.893231 0.565171</rdf:li>\n           <rdf:li>d 0.893798 0.584844</rdf:li>\n           <rdf:li>d 0.889889 0.603642</rdf:li>\n           <rdf:li>d 0.878862 0.614327</rdf:li>\n           <rdf:li>d 0.866739 0.621883</rdf:li>\n           <rdf:li>d 0.853612 0.622102</rdf:li>\n           <rdf:li>d 0.840485 0.622118</rdf:li>\n           <rdf:li>d 0.827420 0.620190</rdf:li>\n           <rdf:li>d 0.814294 0.619820</rdf:li>\n           <rdf:li>d 0.801416 0.623640</rdf:li>\n           <rdf:li>d 0.788350 0.625554</rdf:li>\n           <rdf:li>d 0.775395 0.628737</rdf:li>\n           <rdf:li>d 0.763798 0.637965</rdf:li>\n           <rdf:li>d 0.761158 0.618675</rdf:li>\n           <rdf:li>d 0.763186 0.599220</rdf:li>\n           <rdf:li>d 0.771908 0.584502</rdf:li>\n           <rdf:li>d 0.780384 0.569465</rdf:li>\n           <rdf:li>d 0.790466 0.556854</rdf:li>\n           <rdf:li>d 0.800218 0.543671</rdf:li>\n           <rdf:li>d 0.792420 0.559512</rdf:li>\n           <rdf:li>d 0.783874 0.574460</rdf:li>\n           <rdf:li>d 0.774191 0.587756</rdf:li>\n           <rdf:li>d 0.766279 0.603470</rdf:li>\n           <rdf:li>d 0.757800 0.618503</rdf:li>\n           <rdf:li>d 0.751284 0.635598</rdf:li>\n           <rdf:li>d 0.748366 0.654797</rdf:li>\n           <rdf:li>d 0.761378 0.652180</rdf:li>\n           <rdf:li>d 0.774424 0.649989</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.250000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.319074\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.889401 0.935484</rdf:li>\n           <rdf:li>d 0.827199 0.914102</rdf:li>\n           <rdf:li>d 0.764245 0.898426</rdf:li>\n           <rdf:li>d 0.700863 0.887292</rdf:li>\n           <rdf:li>d 0.637327 0.878361</rdf:li>\n           <rdf:li>d 0.573629 0.872566</rdf:li>\n           <rdf:li>d 0.509937 0.866641</rdf:li>\n           <rdf:li>d 0.447017 0.850660</rdf:li>\n           <rdf:li>d 0.510780 0.854515</rdf:li>\n           <rdf:li>d 0.572458 0.879084</rdf:li>\n           <rdf:li>d 0.633835 0.905285</rdf:li>\n           <rdf:li>d 0.573514 0.874049</rdf:li>\n           <rdf:li>d 0.516926 0.829800</rdf:li>\n           <rdf:li>d 0.461356 0.782741</rdf:li>\n           <rdf:li>d 0.407056 0.833028</rdf:li>\n           <rdf:li>d 0.397189 0.927600</rdf:li>\n           <rdf:li>d 0.384260 1.021337</rdf:li>\n           <rdf:li>d 0.320553 1.026907</rdf:li>\n           <rdf:li>d 0.256817 1.022138</rdf:li>\n           <rdf:li>d 0.193816 1.006902</rdf:li>\n           <rdf:li>d 0.134189 0.972797</rdf:li>\n           <rdf:li>d 0.076484 0.931926</rdf:li>\n           <rdf:li>d 0.026332 0.872735</rdf:li>\n           <rdf:li>d 0.029988 0.968300</rdf:li>\n           <rdf:li>d 0.044981 1.061343</rdf:li>\n           <rdf:li>d 0.035457 0.966693</rdf:li>\n           <rdf:li>d 0.025247 0.872204</rdf:li>\n           <rdf:li>d 0.014993 0.777725</rdf:li>\n           <rdf:li>d 0.004740 0.683246</rdf:li>\n           <rdf:li>d -0.005513 0.588768</rdf:li>\n           <rdf:li>d -0.015782 0.494293</rdf:li>\n           <rdf:li>d -0.026050 0.399818</rdf:li>\n           <rdf:li>d -0.035525 0.305156</rdf:li>\n           <rdf:li>d -0.045000 0.210495</rdf:li>\n           <rdf:li>d -0.055164 0.115995</rdf:li>\n           <rdf:li>d -0.066501 0.021795</rdf:li>\n           <rdf:li>d -0.052694 0.115250</rdf:li>\n           <rdf:li>d -0.038887 0.208705</rdf:li>\n           <rdf:li>d -0.023207 0.301493</rdf:li>\n           <rdf:li>d -0.008208 0.394533</rdf:li>\n           <rdf:li>d 0.006792 0.487574</rdf:li>\n           <rdf:li>d 0.022503 0.580350</rdf:li>\n           <rdf:li>d 0.039441 0.672639</rdf:li>\n           <rdf:li>d 0.066160 0.585711</rdf:li>\n           <rdf:li>d 0.088118 0.495834</rdf:li>\n           <rdf:li>d 0.117264 0.410679</rdf:li>\n           <rdf:li>d 0.137164 0.501629</rdf:li>\n           <rdf:li>d 0.184303 0.437107</rdf:li>\n           <rdf:li>d 0.225411 0.363891</rdf:li>\n           <rdf:li>d 0.266160 0.290225</rdf:li>\n           <rdf:li>d 0.307469 0.217265</rdf:li>\n           <rdf:li>d 0.350939 0.147185</rdf:li>\n           <rdf:li>d 0.311916 0.222925</rdf:li>\n           <rdf:li>d 0.275196 0.301213</rdf:li>\n           <rdf:li>d 0.239307 0.380363</rdf:li>\n           <rdf:li>d 0.206445 0.462417</rdf:li>\n           <rdf:li>d 0.175453 0.546093</rdf:li>\n           <rdf:li>d 0.145278 0.630438</rdf:li>\n           <rdf:li>d 0.118403 0.717258</rdf:li>\n           <rdf:li>d 0.087779 0.801237</rdf:li>\n           <rdf:li>d 0.069548 0.709504</rdf:li>\n           <rdf:li>d 0.057190 0.615594</rdf:li>\n           <rdf:li>d 0.046317 0.521271</rdf:li>\n           <rdf:li>d 0.035972 0.426815</rdf:li>\n           <rdf:li>d 0.025627 0.332359</rdf:li>\n           <rdf:li>d 0.015901 0.237755</rdf:li>\n           <rdf:li>d 0.006175 0.143151</rdf:li>\n           <rdf:li>d -0.003012 0.048426</rdf:li>\n           <rdf:li>d -0.013806 -0.045917</rdf:li>\n           <rdf:li>d -0.008403 0.049461</rdf:li>\n           <rdf:li>d 0.000299 0.144289</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.265719\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.956989 0.165899</rdf:li>\n           <rdf:li>d 0.909456 0.130249</rdf:li>\n           <rdf:li>d 0.865172 0.086177</rdf:li>\n           <rdf:li>d 0.824540 0.034797</rdf:li>\n           <rdf:li>d 0.783908 -0.016584</rdf:li>\n           <rdf:li>d 0.751495 -0.079756</rdf:li>\n           <rdf:li>d 0.721053 -0.145098</rdf:li>\n           <rdf:li>d 0.694726 -0.214344</rdf:li>\n           <rdf:li>d 0.747362 -0.225336</rdf:li>\n           <rdf:li>d 0.790674 -0.179143</rdf:li>\n           <rdf:li>d 0.830508 -0.126374</rdf:li>\n           <rdf:li>d 0.868311 -0.070346</rdf:li>\n           <rdf:li>d 0.903579 -0.010713</rdf:li>\n           <rdf:li>d 0.937435 0.050732</rdf:li>\n           <rdf:li>d 0.970291 0.113388</rdf:li>\n           <rdf:li>d 0.999356 0.180125</rdf:li>\n           <rdf:li>d 1.022527 0.251865</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.075000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.662058 0.248848</rdf:li>\n           <rdf:li>d 0.649243 0.253120</rdf:li>\n           <rdf:li>d 0.662369 0.253427</rdf:li>\n           <rdf:li>d 0.649417 0.256632</rdf:li>\n           <rdf:li>d 0.636466 0.259856</rdf:li>\n           <rdf:li>d 0.623838 0.265239</rdf:li>\n           <rdf:li>d 0.611761 0.272959</rdf:li>\n           <rdf:li>d 0.607082 0.291357</rdf:li>\n           <rdf:li>d 0.605914 0.310971</rdf:li>\n           <rdf:li>d 0.605424 0.330649</rdf:li>\n           <rdf:li>d 0.605260 0.350339</rdf:li>\n           <rdf:li>d 0.605224 0.370031</rdf:li>\n           <rdf:li>d 0.603705 0.350471</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.382488 0.025346</rdf:li>\n           <rdf:li>d 0.369361 0.025346</rdf:li>\n           <rdf:li>d 0.356233 0.025346</rdf:li>\n           <rdf:li>d 0.343105 0.025346</rdf:li>\n           <rdf:li>d 0.329977 0.025346</rdf:li>\n           <rdf:li>d 0.316850 0.025346</rdf:li>\n           <rdf:li>d 0.303744 0.024207</rdf:li>\n           <rdf:li>d 0.290638 0.023069</rdf:li>\n           <rdf:li>d 0.277589 0.020917</rdf:li>\n           <rdf:li>d 0.264560 0.018498</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.588326 0.080645</rdf:li>\n           <rdf:li>d 0.579043 0.066721</rdf:li>\n           <rdf:li>d 0.568675 0.054642</rdf:li>\n           <rdf:li>d 0.557521 0.044258</rdf:li>\n           <rdf:li>d 0.545342 0.036909</rdf:li>\n           <rdf:li>d 0.533449 0.028571</rdf:li>\n           <rdf:li>d 0.521643 0.019960</rdf:li>\n           <rdf:li>d 0.509837 0.011349</rdf:li>\n           <rdf:li>d 0.497638 0.004074</rdf:li>\n           <rdf:li>d 0.485116 -0.001842</rdf:li>\n           <rdf:li>d 0.472777 -0.008565</rdf:li>\n           <rdf:li>d 0.459993 -0.013042</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.864823 0.493088</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.886329 0.569124</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.701997 0.320276</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.780338 0.373272</rdf:li>\n           <rdf:li>d 0.767210 0.373272</rdf:li>\n           <rdf:li>d 0.754082 0.373272</rdf:li>\n           <rdf:li>d 0.740955 0.373272</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.065639\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.938556 0.559908</rdf:li>\n           <rdf:li>d 0.929911 0.574727</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.105655\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.317972 0.815668</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:PaintBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n"
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
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"AG9X7527\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"0DD8C292DE13EC44756EB4F3F1EEDE71\"\n     crs:SupportsAmount=\"false\"\n     crs:LookAmount=\"0.000000\">\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"11.3\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"As Shot\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"0\"\n      crs:Saturation=\"0\"\n      crs:Sharpness=\"25\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:VignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"+34\"\n      crs:Vibrance=\"0\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"-3\"\n      crs:HueAdjustmentGreen=\"0\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"-12\"\n      crs:SaturationAdjustmentYellow=\"+100\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+15\"\n      crs:LuminanceAdjustmentOrange=\"+37\"\n      crs:LuminanceAdjustmentYellow=\"+2\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"-23\"\n      crs:LuminanceAdjustmentBlue=\"-13\"\n      crs:LuminanceAdjustmentPurple=\"+19\"\n      crs:LuminanceAdjustmentMagenta=\"+26\"\n      crs:SplitToningShadowHue=\"0\"\n      crs:SplitToningShadowSaturation=\"0\"\n      crs:SplitToningHighlightHue=\"0\"\n      crs:SplitToningHighlightSaturation=\"0\"\n      crs:SplitToningBalance=\"0\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:GrainAmount=\"0\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveUpright=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:Exposure2012=\"+0.15\"\n      crs:Contrast2012=\"0\"\n      crs:Highlights2012=\"-28\"\n      crs:Shadows2012=\"+23\"\n      crs:Whites2012=\"-8\"\n      crs:Blacks2012=\"0\"\n      crs:Clarity2012=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:Dehaze=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName=\"Medium Contrast\"\n      crs:ToneCurveName2012=\"Custom\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"LensDefaults\">\n     <crs:ToneCurve>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>32, 22</rdf:li>\n       <rdf:li>64, 56</rdf:li>\n       <rdf:li>128, 128</rdf:li>\n       <rdf:li>192, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurve>\n     <crs:ToneCurveRed>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurveRed>\n     <crs:ToneCurveGreen>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurveGreen>\n     <crs:ToneCurveBlue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurveBlue>\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>193, 198</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:PaintBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.125000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.078978\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.603687 0.264977</rdf:li>\n             <rdf:li>d 0.596623 0.286169</rdf:li>\n             <rdf:li>d 0.589559 0.307361</rdf:li>\n             <rdf:li>d 0.584301 0.329703</rdf:li>\n             <rdf:li>d 0.597201 0.316030</rdf:li>\n             <rdf:li>d 0.607754 0.298401</rdf:li>\n             <rdf:li>d 0.605512 0.321854</rdf:li>\n             <rdf:li>d 0.607325 0.298317</rdf:li>\n             <rdf:li>d 0.608276 0.274667</rdf:li>\n             <rdf:li>d 0.605256 0.251411</rdf:li>\n             <rdf:li>d 0.599419 0.229395</rdf:li>\n             <rdf:li>d 0.591399 0.208983</rdf:li>\n             <rdf:li>d 0.584190 0.187901</rdf:li>\n             <rdf:li>d 0.576516 0.167192</rdf:li>\n             <rdf:li>d 0.570022 0.145593</rdf:li>\n             <rdf:li>d 0.563299 0.124153</rdf:li>\n             <rdf:li>d 0.556427 0.102820</rdf:li>\n             <rdf:li>d 0.551404 0.080357</rdf:li>\n             <rdf:li>d 0.539447 0.064875</rdf:li>\n             <rdf:li>d 0.523680 0.063450</rdf:li>\n             <rdf:li>d 0.508012 0.060456</rdf:li>\n             <rdf:li>d 0.492389 0.056962</rdf:li>\n             <rdf:li>d 0.476766 0.053468</rdf:li>\n             <rdf:li>d 0.461467 0.047574</rdf:li>\n             <rdf:li>d 0.445974 0.042962</rdf:li>\n             <rdf:li>d 0.430480 0.038349</rdf:li>\n             <rdf:li>d 0.415638 0.030242</rdf:li>\n             <rdf:li>d 0.400467 0.023645</rdf:li>\n             <rdf:li>d 0.385296 0.017049</rdf:li>\n             <rdf:li>d 0.369961 0.011373</rdf:li>\n             <rdf:li>d 0.354737 0.005056</rdf:li>\n             <rdf:li>d 0.339405 -0.000640</rdf:li>\n             <rdf:li>d 0.323901 -0.005177</rdf:li>\n             <rdf:li>d 0.308144 -0.006816</rdf:li>\n             <rdf:li>d 0.292833 -0.000990</rdf:li>\n             <rdf:li>d 0.277225 0.002648</rdf:li>\n             <rdf:li>d 0.261772 0.007553</rdf:li>\n             <rdf:li>d 0.246490 0.013545</rdf:li>\n             <rdf:li>d 0.261727 0.007300</rdf:li>\n             <rdf:li>d 0.256239 0.029517</rdf:li>\n             <rdf:li>d 0.248413 0.050099</rdf:li>\n             <rdf:li>d 0.239760 0.069920</rdf:li>\n             <rdf:li>d 0.234537 0.092280</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.125000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.589862 0.186636</rdf:li>\n             <rdf:li>d 0.591311 0.206207</rdf:li>\n             <rdf:li>d 0.592060 0.225867</rdf:li>\n             <rdf:li>d 0.592808 0.245526</rdf:li>\n             <rdf:li>d 0.593789 0.265163</rdf:li>\n             <rdf:li>d 0.594114 0.284849</rdf:li>\n             <rdf:li>d 0.594438 0.304534</rdf:li>\n             <rdf:li>d 0.593439 0.324169</rdf:li>\n             <rdf:li>d 0.593157 0.343856</rdf:li>\n             <rdf:li>d 0.592206 0.363496</rdf:li>\n             <rdf:li>d 0.590898 0.383090</rdf:li>\n             <rdf:li>d 0.590075 0.402742</rdf:li>\n             <rdf:li>d 0.597025 0.386037</rdf:li>\n             <rdf:li>d 0.599866 0.366812</rdf:li>\n             <rdf:li>d 0.605154 0.348788</rdf:li>\n             <rdf:li>d 0.609923 0.330442</rdf:li>\n             <rdf:li>d 0.616024 0.313006</rdf:li>\n             <rdf:li>d 0.621950 0.295435</rdf:li>\n             <rdf:li>d 0.626597 0.277018</rdf:li>\n             <rdf:li>d 0.632436 0.259382</rdf:li>\n             <rdf:li>d 0.643556 0.248913</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.872504 0.493088</rdf:li>\n             <rdf:li>d 0.878879 0.510301</rdf:li>\n             <rdf:li>d 0.883796 0.528559</rdf:li>\n             <rdf:li>d 0.889515 0.546284</rdf:li>\n             <rdf:li>d 0.893231 0.565171</rdf:li>\n             <rdf:li>d 0.893798 0.584844</rdf:li>\n             <rdf:li>d 0.889889 0.603642</rdf:li>\n             <rdf:li>d 0.878862 0.614327</rdf:li>\n             <rdf:li>d 0.866739 0.621883</rdf:li>\n             <rdf:li>d 0.853612 0.622102</rdf:li>\n             <rdf:li>d 0.840485 0.622118</rdf:li>\n             <rdf:li>d 0.827420 0.620190</rdf:li>\n             <rdf:li>d 0.814294 0.619820</rdf:li>\n             <rdf:li>d 0.801416 0.623640</rdf:li>\n             <rdf:li>d 0.788350 0.625554</rdf:li>\n             <rdf:li>d 0.775395 0.628737</rdf:li>\n             <rdf:li>d 0.763798 0.637965</rdf:li>\n             <rdf:li>d 0.761158 0.618675</rdf:li>\n             <rdf:li>d 0.763186 0.599220</rdf:li>\n             <rdf:li>d 0.771908 0.584502</rdf:li>\n             <rdf:li>d 0.780384 0.569465</rdf:li>\n             <rdf:li>d 0.790466 0.556854</rdf:li>\n             <rdf:li>d 0.800218 0.543671</rdf:li>\n             <rdf:li>d 0.792420 0.559512</rdf:li>\n             <rdf:li>d 0.783874 0.574460</rdf:li>\n             <rdf:li>d 0.774191 0.587756</rdf:li>\n             <rdf:li>d 0.766279 0.603470</rdf:li>\n             <rdf:li>d 0.757800 0.618503</rdf:li>\n             <rdf:li>d 0.751284 0.635598</rdf:li>\n             <rdf:li>d 0.748366 0.654797</rdf:li>\n             <rdf:li>d 0.761378 0.652180</rdf:li>\n             <rdf:li>d 0.774424 0.649989</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.250000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.319074\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.889401 0.935484</rdf:li>\n             <rdf:li>d 0.827199 0.914102</rdf:li>\n             <rdf:li>d 0.764245 0.898426</rdf:li>\n             <rdf:li>d 0.700863 0.887292</rdf:li>\n             <rdf:li>d 0.637327 0.878361</rdf:li>\n             <rdf:li>d 0.573629 0.872566</rdf:li>\n             <rdf:li>d 0.509937 0.866641</rdf:li>\n             <rdf:li>d 0.447017 0.850660</rdf:li>\n             <rdf:li>d 0.510780 0.854515</rdf:li>\n             <rdf:li>d 0.572458 0.879084</rdf:li>\n             <rdf:li>d 0.633835 0.905285</rdf:li>\n             <rdf:li>d 0.573514 0.874049</rdf:li>\n             <rdf:li>d 0.516926 0.829800</rdf:li>\n             <rdf:li>d 0.461356 0.782741</rdf:li>\n             <rdf:li>d 0.407056 0.833028</rdf:li>\n             <rdf:li>d 0.397189 0.927600</rdf:li>\n             <rdf:li>d 0.384260 1.021337</rdf:li>\n             <rdf:li>d 0.320553 1.026907</rdf:li>\n             <rdf:li>d 0.256817 1.022138</rdf:li>\n             <rdf:li>d 0.193816 1.006902</rdf:li>\n             <rdf:li>d 0.134189 0.972797</rdf:li>\n             <rdf:li>d 0.076484 0.931926</rdf:li>\n             <rdf:li>d 0.026332 0.872735</rdf:li>\n             <rdf:li>d 0.029988 0.968300</rdf:li>\n             <rdf:li>d 0.044981 1.061343</rdf:li>\n             <rdf:li>d 0.035457 0.966693</rdf:li>\n             <rdf:li>d 0.025247 0.872204</rdf:li>\n             <rdf:li>d 0.014993 0.777725</rdf:li>\n             <rdf:li>d 0.004740 0.683246</rdf:li>\n             <rdf:li>d -0.005513 0.588768</rdf:li>\n             <rdf:li>d -0.015782 0.494293</rdf:li>\n             <rdf:li>d -0.026050 0.399818</rdf:li>\n             <rdf:li>d -0.035525 0.305156</rdf:li>\n             <rdf:li>d -0.045000 0.210495</rdf:li>\n             <rdf:li>d -0.055164 0.115995</rdf:li>\n             <rdf:li>d -0.066501 0.021795</rdf:li>\n             <rdf:li>d -0.052694 0.115250</rdf:li>\n             <rdf:li>d -0.038887 0.208705</rdf:li>\n             <rdf:li>d -0.023207 0.301493</rdf:li>\n             <rdf:li>d -0.008208 0.394533</rdf:li>\n             <rdf:li>d 0.006792 0.487574</rdf:li>\n             <rdf:li>d 0.022503 0.580350</rdf:li>\n             <rdf:li>d 0.039441 0.672639</rdf:li>\n             <rdf:li>d 0.066160 0.585711</rdf:li>\n             <rdf:li>d 0.088118 0.495834</rdf:li>\n             <rdf:li>d 0.117264 0.410679</rdf:li>\n             <rdf:li>d 0.137164 0.501629</rdf:li>\n             <rdf:li>d 0.184303 0.437107</rdf:li>\n             <rdf:li>d 0.225411 0.363891</rdf:li>\n             <rdf:li>d 0.266160 0.290225</rdf:li>\n             <rdf:li>d 0.307469 0.217265</rdf:li>\n             <rdf:li>d 0.350939 0.147185</rdf:li>\n             <rdf:li>d 0.311916 0.222925</rdf:li>\n             <rdf:li>d 0.275196 0.301213</rdf:li>\n             <rdf:li>d 0.239307 0.380363</rdf:li>\n             <rdf:li>d 0.206445 0.462417</rdf:li>\n             <rdf:li>d 0.175453 0.546093</rdf:li>\n             <rdf:li>d 0.145278 0.630438</rdf:li>\n             <rdf:li>d 0.118403 0.717258</rdf:li>\n             <rdf:li>d 0.087779 0.801237</rdf:li>\n             <rdf:li>d 0.069548 0.709504</rdf:li>\n             <rdf:li>d 0.057190 0.615594</rdf:li>\n             <rdf:li>d 0.046317 0.521271</rdf:li>\n             <rdf:li>d 0.035972 0.426815</rdf:li>\n             <rdf:li>d 0.025627 0.332359</rdf:li>\n             <rdf:li>d 0.015901 0.237755</rdf:li>\n             <rdf:li>d 0.006175 0.143151</rdf:li>\n             <rdf:li>d -0.003012 0.048426</rdf:li>\n             <rdf:li>d -0.013806 -0.045917</rdf:li>\n             <rdf:li>d -0.008403 0.049461</rdf:li>\n             <rdf:li>d 0.000299 0.144289</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.265719\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.956989 0.165899</rdf:li>\n             <rdf:li>d 0.909456 0.130249</rdf:li>\n             <rdf:li>d 0.865172 0.086177</rdf:li>\n             <rdf:li>d 0.824540 0.034797</rdf:li>\n             <rdf:li>d 0.783908 -0.016584</rdf:li>\n             <rdf:li>d 0.751495 -0.079756</rdf:li>\n             <rdf:li>d 0.721053 -0.145098</rdf:li>\n             <rdf:li>d 0.694726 -0.214344</rdf:li>\n             <rdf:li>d 0.747362 -0.225336</rdf:li>\n             <rdf:li>d 0.790674 -0.179143</rdf:li>\n             <rdf:li>d 0.830508 -0.126374</rdf:li>\n             <rdf:li>d 0.868311 -0.070346</rdf:li>\n             <rdf:li>d 0.903579 -0.010713</rdf:li>\n             <rdf:li>d 0.937435 0.050732</rdf:li>\n             <rdf:li>d 0.970291 0.113388</rdf:li>\n             <rdf:li>d 0.999356 0.180125</rdf:li>\n             <rdf:li>d 1.022527 0.251865</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.075000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.662058 0.248848</rdf:li>\n             <rdf:li>d 0.649243 0.253120</rdf:li>\n             <rdf:li>d 0.662369 0.253427</rdf:li>\n             <rdf:li>d 0.649417 0.256632</rdf:li>\n             <rdf:li>d 0.636466 0.259856</rdf:li>\n             <rdf:li>d 0.623838 0.265239</rdf:li>\n             <rdf:li>d 0.611761 0.272959</rdf:li>\n             <rdf:li>d 0.607082 0.291357</rdf:li>\n             <rdf:li>d 0.605914 0.310971</rdf:li>\n             <rdf:li>d 0.605424 0.330649</rdf:li>\n             <rdf:li>d 0.605260 0.350339</rdf:li>\n             <rdf:li>d 0.605224 0.370031</rdf:li>\n             <rdf:li>d 0.603705 0.350471</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.382488 0.025346</rdf:li>\n             <rdf:li>d 0.369361 0.025346</rdf:li>\n             <rdf:li>d 0.356233 0.025346</rdf:li>\n             <rdf:li>d 0.343105 0.025346</rdf:li>\n             <rdf:li>d 0.329977 0.025346</rdf:li>\n             <rdf:li>d 0.316850 0.025346</rdf:li>\n             <rdf:li>d 0.303744 0.024207</rdf:li>\n             <rdf:li>d 0.290638 0.023069</rdf:li>\n             <rdf:li>d 0.277589 0.020917</rdf:li>\n             <rdf:li>d 0.264560 0.018498</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.588326 0.080645</rdf:li>\n             <rdf:li>d 0.579043 0.066721</rdf:li>\n             <rdf:li>d 0.568675 0.054642</rdf:li>\n             <rdf:li>d 0.557521 0.044258</rdf:li>\n             <rdf:li>d 0.545342 0.036909</rdf:li>\n             <rdf:li>d 0.533449 0.028571</rdf:li>\n             <rdf:li>d 0.521643 0.019960</rdf:li>\n             <rdf:li>d 0.509837 0.011349</rdf:li>\n             <rdf:li>d 0.497638 0.004074</rdf:li>\n             <rdf:li>d 0.485116 -0.001842</rdf:li>\n             <rdf:li>d 0.472777 -0.008565</rdf:li>\n             <rdf:li>d 0.459993 -0.013042</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.864823 0.493088</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.886329 0.569124</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.701997 0.320276</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.780338 0.373272</rdf:li>\n             <rdf:li>d 0.767210 0.373272</rdf:li>\n             <rdf:li>d 0.754082 0.373272</rdf:li>\n             <rdf:li>d 0.740955 0.373272</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.065639\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.938556 0.559908</rdf:li>\n             <rdf:li>d 0.929911 0.574727</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.105655\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.317972 0.815668</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:PaintBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n"
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
						"<integer>": 30
					},
					{
						"<integer>": 31
					},
					{
						"<integer>": 32
					},
					{
						"<integer>": 33
					},
					{
						"<integer>": 34
					},
					{
						"<integer>": 35
					},
					{
						"<integer>": 36
					},
					{
						"<integer>": 37
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
