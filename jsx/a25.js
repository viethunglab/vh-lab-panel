// Application: C:\Program Files\Adobe\Adobe Photoshop CC 2019 (20.0.0)
// Date: 2021-11-25T13:31:43-08:00
// Actions file: C:\Users\NT Studio\Desktop\NT.atn
// Action set: NT

// jamEngine.jsxinc v4.4.4 (minified)
if(typeof jamEngine!=='object') {var jamEngine={};(function() {var that;jamEngine.meaningfulIds=false;jamEngine.parseFriendly=false;jamEngine.displayDialogs=DialogModes.ERROR;var conflictingStringIdStrs={"'Algn'":["align","alignment"],"'AntA'":["antiAlias","antiAliasedPICTAcquire"],"'BckL'":["backgroundLayer","backgroundLevel"],"'BlcG'":["blackGenerationType","blackGenerationCurve"],"'BlcL'":["blackLevel","blackLimit"],"'Blks'":["blacks","blocks"],"'BlrM'":["blurMethod","blurMore"],"'BrgC'":["brightnessEvent","brightnessContrast"],"'BrsD'":["brushDetail","brushesDefine"],"'Brsh'":["brush","brushes"],"'Clcl'":["calculation","calculations"],"'ClrP'":["colorPalette","coloredPencil"],"'Cnst'":["constant","constrain"],"'CntC'":["centerCropMarks","conteCrayon"],"'Cntr'":["center","contrast"],"'CrtD'":["createDroplet","createDuplicate"],"'CstP'":["customPalette","customPhosphors"],"'Cstm'":["custom","customPattern"],"'Drkn'":["darken","darkness"],"'Dstr'":["distort","distortion","distribute","distribution"],"'Dstt'":["desaturate","destWhiteMax"],"'FlIn'":["fileInfo","fillInverse"],"'Gd  '":["good","guide"],"'GnrP'":["generalPreferences","generalPrefs","preferencesClass"],"'GrSt'":["grainStippled","graySetup"],"'Grdn'":["gradientClassEvent","gridMinor"],"'Grn '":["grain","green"],"'Grns'":["graininess","greens"],"'HstP'":["historyPreferences","historyPrefs"],"'HstS'":["historyState","historyStateSourceType"],"'ImgP'":["imageCachePreferences","imagePoint"],"'In  '":["in","stampIn"],"'IntW'":["interfaceWhite","intersectWith"],"'Intr'":["interfaceIconFrameDimmed","interlace","interpolation","intersect"],"'JPEG'":["JPEG","JPEGFormat"],"'LghD'":["lightDirection","lightDirectional"],"'LghO'":["lightOmni","lightenOnly"],"'LghS'":["lightSource","lightSpot"],"'Lns '":["lens","lines"],"'Mgnt'":["magenta","magentas"],"'MrgL'":["mergeLayers","mergedLayers"],"'Mxm '":["maximum","maximumQuality"],"'NTSC'":["NTSC","NTSCColors"],"'NmbL'":["numberOfLayers","numberOfLevels"],"'PlgP'":["pluginPicker","pluginPrefs"],"'Pncl'":["pencilEraser","pencilWidth"],"'Pnt '":["paint","point"],"'Prsp'":["perspective","perspectiveIndex"],"'PrvM'":["previewMacThumbnail","previewMagenta"],"'Pstr'":["posterization","posterize"],"'RGBS'":["RGBSetup","RGBSetupSource"],"'Rds '":["radius","reds"],"'ScrD'":["scratchDisks","screenDot"],"'ShdI'":["shadingIntensity","shadowIntensity"],"'ShpC'":["shapeCurveType","shapingCurve"],"'ShrE'":["sharpenEdges","shearEd"],"'Shrp'":["sharpen","sharpness"],"'SplC'":["splitChannels","supplementalCategories"],"'Spot'":["spot","spotColor"],"'SprS'":["separationSetup","sprayedStrokes"],"'StrL'":["strokeLength","strokeLocation"],"'Strt'":["saturation","start"],"'TEXT'":["char","textType"],"'TIFF'":["TIFF","TIFFFormat"],"'TglO'":["toggleOptionsPalette","toggleOthers"],"'TrnG'":["transparencyGamutPreferences","transparencyGrid","transparencyGridSize"],"'TrnS'":["transferSpec","transparencyShape","transparencyStop"],"'Trns'":["transparency","transparent"],"'TxtC'":["textClickPoint","textureCoverage"],"'TxtF'":["textureFile","textureFill"],"'UsrM'":["userMaskEnabled","userMaskOptions"],"'c@#^'":["inherits","pInherits"],"'comp'":["comp","sInt64"],"'doub'":["floatType","IEEE64BitFloatingPoint","longFloat"],"'long'":["integer","longInteger","sInt32"],"'magn'":["magnitude","uInt32"],"'null'":["null","target"],"'shor'":["sInt16","sMInt","shortInteger"],"'sing'":["IEEE32BitFloatingPoint","sMFloat","shortFloat"]};jamEngine.getConflictingStringIdStrs=function(charIdStr) {return conflictingStringIdStrs[charIdStr]||null;};jamEngine.uniIdStrToId=function(uniIdStr) {var id=0;if(typeof uniIdStr==='string') {if((uniIdStr.length===(1+4+1))&&(uniIdStr.charAt(0)==="'")&&(uniIdStr.charAt(5)==="'")) {id=app.charIDToTypeID(uniIdStr.substring(1,5));} else {id=app.stringIDToTypeID(uniIdStr);}} return id;};var smallestHashValue=app.charIDToTypeID("    ");jamEngine.idToUniIdStrs=function(id) {var charIdStr="";var stringIdStr=app.typeIDToStringID(id);if(id>=smallestHashValue) {charIdStr="'"+app.typeIDToCharID(id)+"'";if(stringIdStr!=="") {if(charIdStr in conflictingStringIdStrs) {stringIdStr=conflictingStringIdStrs[charIdStr];}}} return[charIdStr,stringIdStr];};jamEngine.equivalentUniIdStrs=function(uniIdStr1,uniIdStr2) {return this.uniIdStrToId(uniIdStr1)===this.uniIdStrToId(uniIdStr2);};function putInReference(ref,containers) {if(containers.constructor===Array) {var count=containers.length;for(var i=0;i<count;i++) {var container=that.parseCompact(containers[i]);var desiredClassId=that.uniIdStrToId(container[0]);var typedValue=that.parseCompact(container[1]);var form=typedValue[0];var value=typedValue[1];switch(form) {case"<class>":ref.putClass(desiredClassId);break;case"<enumerated>":var enumerated=that.parseCompact(value);ref.putEnumerated(desiredClassId,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<identifier>":ref.putIdentifier(desiredClassId,value);break;case"<index>":ref.putIndex(desiredClassId,value);break;case"<name>":ref.putName(desiredClassId,value);break;case"<offset>":ref.putOffset(desiredClassId,value);break;case"<property>":ref.putProperty(desiredClassId,that.uniIdStrToId(value));break;default:throw new Error("[jamEngine putInReference] Unknown reference form: "+form);break;}}} else {throw new Error("[jamEngine putInReference] JavaScript array expected");}} function putInList(list,items) {if(items.constructor===Array) {var count=items.length;for(var i=0;i<count;i++) {var item=that.parseCompact(items[i]);var type=item[0];var value=item[1];switch(type) {case"<boolean>":list.putBoolean(value);break;case"<class>":list.putClass(that.uniIdStrToId(value));break;case"<data>":list.putData(value);break;case"<double>":list.putDouble(value);break;case"<enumerated>":var enumerated=that.parseCompact(value);list.putEnumerated(that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":list.putInteger(value);break;case"<largeInteger>":list.putLargeInteger(value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);list.putList(actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);list.putObject(that.uniIdStrToId(object[0]),actionDescriptor);} else {list.putClass(that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);list.putPath(fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);list.putReference(actionReference);break;case"<string>":list.putString(value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);list.putUnitDouble(that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInList] Unknown list type: "+type);break;}}} else {throw new Error("[jamEngine putInList] JavaScript array expected");}} function putInDescriptor(desc,members) {if(members.constructor===Object) {for(var key in members) {if(members.hasOwnProperty(key)) {var keyID=that.uniIdStrToId(key);var member=that.parseCompact(members[key]);var type=member[0];var value=member[1];switch(type) {case"<boolean>":desc.putBoolean(keyID,value);break;case"<class>":desc.putClass(keyID,that.uniIdStrToId(value));break;case"<data>":desc.putData(keyID,value);break;case"<double>":desc.putDouble(keyID,value);break;case"<enumerated>":var enumerated=that.parseCompact(value);desc.putEnumerated(keyID,that.uniIdStrToId(enumerated[0]),that.uniIdStrToId(enumerated[1]));break;case"<integer>":desc.putInteger(keyID,value);break;case"<largeInteger>":desc.putLargeInteger(keyID,value);break;case"<list>":var actionList=new ActionList();putInList(actionList,value);desc.putList(keyID,actionList);break;case"<object>":var object=that.parseCompact(value);if(object[1]) {var actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,object[1]);desc.putObject(keyID,that.uniIdStrToId(object[0]),actionDescriptor);} else {desc.putClass(keyID,that.uniIdStrToId(object[0]));} break;case"<path>":var fileRef=new File(value);desc.putPath(keyID,fileRef);break;case"<reference>":var actionReference=new ActionReference();putInReference(actionReference,value);desc.putReference(keyID,actionReference);break;case"<string>":desc.putString(keyID,value);break;case"<unitDouble>":var unitDouble=that.parseCompact(value);desc.putUnitDouble(keyID,that.uniIdStrToId(unitDouble[0]),unitDouble[1]);break;default:throw new Error("[jamEngine putInDescriptor] Unknown descriptor type: "+type);break;}}}} else {throw new Error("[jamEngine putInDescriptor] JavaScript object expected");}} var contextRules={"'Algn'":{"<classKey>":{"bevelEmboss":"align","frameFX":"align","gradientFill":"align","gradientLayer":"align","patternFill":"align","patternLayer":"align"},"<event>":"align","<key>":"alignment"},"'AntA'":{"<class>":"antiAliasedPICTAcquire","<key>":"antiAlias"},"'BckL'":{"<class>":"backgroundLayer","<key>":"backgroundLevel"},"'BlcG'":{"<enumType>":"blackGenerationType","<key>":"blackGenerationCurve"},"'BlcL'":{"<classKey>":{"'GEfc'":"blackLevel","CMYKSetup":"blackLimit"},"<eventKey>":{"reticulation":"blackLevel"}},"'Blks'":{"<typeValue>":{"colors":"blacks","extrudeType":"blocks"}},"'BlrM'":{"<enumType>":"blurMethod","<event>":"blurMore","<key>":"blurMethod"},"'BrgC'":{"<class>":"brightnessContrast","<event>":"brightnessContrast"},"'BrsD'":{"<enumValue>":"brushesDefine","<key>":"brushDetail"},"'Brsh'":{"<class>":"brush","<key>":"brushes"},"'Clcl'":{"<class>":"calculation","<enumValue>":"calculations","<key>":"calculation"},"'ClrP'":{"<typeValue>":{"'GEft'":"coloredPencil"},"<enumType>":"colorPalette","<event>":"coloredPencil"},"'Cnst'":{"<classKey>":{"channelMatrix":"constant"},"<unknown>":"constrain"},"'CntC'":{"<typeValue>":{"'GEft'":"conteCrayon"},"<event>":"conteCrayon","<key>":"centerCropMarks"},"'Cntr'":{"<classKey>":{"'GEfc'":"contrast","brightnessContrast":"contrast","document":"center","polygon":"center","quadrilateral":"center"},"<eventKey>":{"adaptCorrect":"contrast","brightnessEvent":"contrast","grain":"contrast","halftoneScreen":"contrast","sumie":"contrast","tornEdges":"contrast","waterPaper":"contrast"},"<enumValue>":"center"},"'CrtD'":{"<enumValue>":"createDuplicate","<event>":"createDroplet"},"'CstP'":{"<class>":"customPhosphors","<key>":"customPalette"},"'Cstm'":{"<enumValue>":"customPattern","<event>":"custom","<key>":"custom"},"'Drkn'":{"<enumValue>":"darken","<key>":"darkness"},"'Dstr'":{"<classKey>":{"'GEfc'":"distortion"},"<eventKey>":{"glass":"distortion","addNoise":"distribution"},"<enumType>":"distribution","<enumValue>":"distort","<event>":"distribute"},"'Dstt'":{"<enumValue>":"desaturate","<event>":"desaturate","<key>":"destWhiteMax"},"'FlIn'":{"<typeValue>":{"fillColor":"fillInverse","menuItemType":"fileInfo"},"<class>":"fileInfo","<key>":"fileInfo"},"'Gd  '":{"<class>":"guide","<enumValue>":"good"},"'GnrP'":{"<class>":"preferencesClass","<enumValue>":"generalPreferences","<key>":"generalPrefs"},"'GrSt'":{"<class>":"graySetup","<enumValue>":"grainStippled","<key>":"graySetup"},"'Grdn'":{"<class>":"gradientClassEvent","<event>":"gradientClassEvent","<key>":"gridMinor"},"'Grn '":{"<typeValue>":{"'GEft'":"grain"},"<classKey>":{"'GEfc'":"grain","RGBColor":"green","blackAndWhite":"green","channelMatrix":"green","channelMixer":"green"},"<eventKey>":{"blackAndWhite":"green","channelMixer":"green","filmGrain":"grain"},"<enumValue>":"green","<event>":"grain"},"'Grns'":{"<enumValue>":"greens","<key>":"graininess"},"'HstP'":{"<enumValue>":"historyPreferences","<key>":"historyPrefs"},"'HstS'":{"<class>":"historyState","<enumType>":"historyStateSourceType"},"'ImgP'":{"<class>":"imagePoint","<enumValue>":"imageCachePreferences"},"'In  '":{"<enumValue>":"stampIn","<key>":"in"},"'IntW'":{"<event>":"intersectWith","<key>":"interfaceWhite"},"'Intr'":{"<typeValue>":{"shapeOperation":"intersect"},"<classKey>":{"GIFFormat":"interlace","SaveForWeb":"interlace","application":"interfaceIconFrameDimmed","computedBrush":"interpolation","dBrush":"interpolation","gradientClassEvent":"interpolation","photoshopEPSFormat":"interpolation","sampledBrush":"interpolation"},"<eventKey>":{"convertMode":"interpolation","imageSize":"interpolation","transform":"interpolation"},"<event>":"intersect"},"'JPEG'":{"<class>":"JPEGFormat","<enumValue>":"JPEG"},"'LghD'":{"<enumType>":"lightDirection","<enumValue>":"lightDirectional","<key>":"lightDirection"},"'LghO'":{"<typeValue>":{"diffuseMode":"lightenOnly","lightType":"lightOmni"}},"'LghS'":{"<class>":"lightSource","<enumValue>":"lightSpot","<key>":"lightSource"},"'Lns '":{"<enumType>":"lens","<enumValue>":"lines","<key>":"lens"},"'Mgnt'":{"<typeValue>":{"channel":"magenta","colors":"magentas","guideGridColor":"magenta"},"<key>":"magenta"},"'MrgL'":{"<enumValue>":"mergedLayers","<event>":"mergeLayers"},"'Mxm '":{"<enumValue>":"maximumQuality","<event>":"maximum","<key>":"maximum"},"'NTSC'":{"<enumValue>":"NTSC","<event>":"NTSCColors"},"'NmbL'":{"<classKey>":{"'GEfc'":"numberOfLevels","document":"numberOfLayers"},"<eventKey>":{"cutout":"numberOfLevels"}},"'PlgP'":{"<class>":"pluginPrefs","<enumValue>":"pluginPicker","<key>":"pluginPrefs"},"'Pncl'":{"<enumValue>":"pencilEraser","<key>":"pencilWidth"},"'Pnt '":{"<typeValue>":{"textType":"point"},"<class>":"point","<event>":"paint"},"'Prsp'":{"<enumValue>":"perspective","<key>":"perspectiveIndex"},"'PrvM'":{"<enumValue>":"previewMagenta","<key>":"previewMacThumbnail"},"'Pstr'":{"<class>":"posterize","<event>":"posterize","<key>":"posterization"},"'RGBS'":{"<enumType>":"RGBSetupSource","<key>":"RGBSetup"},"'Rds '":{"<enumValue>":"reds","<key>":"radius"},"'ScrD'":{"<enumValue>":"screenDot","<key>":"scratchDisks"},"'ShdI'":{"<classKey>":{"'GEfc'":"shadowIntensity"},"<eventKey>":{"watercolor":"shadowIntensity"},"<unknown>":"shadingIntensity"},"'ShpC'":{"<classKey>":{"application":"shapingCurve"},"<class>":"shapingCurve","<key>":"shapeCurveType"},"'ShrE'":{"<event>":"sharpenEdges","<key>":"shearEd"},"'Shrp'":{"<event>":"sharpen","<key>":"sharpness"},"'SplC'":{"<event>":"splitChannels","<key>":"supplementalCategories"},"'Spot'":{"<enumValue>":"spotColor","<key>":"spot"},"'SprS'":{"<typeValue>":{"'GEft'":"sprayedStrokes"},"<enumValue>":"separationSetup","<event>":"sprayedStrokes"},"'StrL'":{"<enumType>":"strokeLocation","<key>":"strokeLength"},"'Strt'":{"<classKey>":{"currentToolOptions":"saturation","fileNamingRules":"start","HSBColorClass":"saturation","hueSatAdjustment":"saturation","hueSatAdjustmentV2":"saturation","lineClass":"start","range":"start","vibrance":"saturation"},"<eventKey>":{"replaceColor":"saturation","variations":"saturation","vibrance":"saturation"},"<enumValue>":"saturation"},"'TEXT'":{"<enumType>":"textType","<key>":"textType"},"'TIFF'":{"<class>":"TIFFFormat","<enumValue>":"TIFF"},"'TglO'":{"<enumValue>":"toggleOptionsPalette","<key>":"toggleOthers"},"'TrnG'":{"<classKey>":{"application":"transparencyGrid","transparencyPrefs":"transparencyGridSize"},"<enumType>":"transparencyGridSize","<enumValue>":"transparencyGamutPreferences"},"'TrnS'":{"<classKey>":{"bevelEmboss":"transparencyShape","dropShadow":"transparencyShape","innerGlow":"transparencyShape","innerShadow":"transparencyShape","outerGlow":"transparencyShape"},"<class>":"transparencyStop","<unknown>":"transferSpec"},"'Trns'":{"<enumValue>":"transparent","<key>":"transparency"},"'TxtC'":{"<classKey>":{"'GEfc'":"textureCoverage","textLayer":"textClickPoint"},"<eventKey>":{"underpainting":"textureCoverage"}},"'TxtF'":{"<event>":"textureFill","<key>":"textureFile"},"'UsrM'":{"<enumType>":"userMaskOptions","<key>":"userMaskEnabled"},"'null'":{"<class>":"null","<enumValue>":"null","<event>":"null","<key>":"target"}};function getFromId(context,parentContext) {var uniIdStr;var kind=context[0];var id=context[1];if(id<smallestHashValue) {uniIdStr=app.typeIDToStringID(id);} else {uniIdStr="'"+app.typeIDToCharID(id)+"'";if(that.meaningfulIds) {if(uniIdStr in contextRules) {function resolveIdStr(candidates) {var idStr="";for(var parentString in candidates) {if(candidates.hasOwnProperty(parentString)) {if(parentContext[1]===that.uniIdStrToId(parentString)) {idStr=candidates[parentString];break;}}} return idStr;} var resolvedIdStr="";var rule=contextRules[uniIdStr];if(parentContext) {switch(kind) {case"<key>":if((parentContext[0]==="<class>")&&("<classKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<classKey>"]);} else if((parentContext[0]==="<event>")&&("<eventKey>"in rule)) {resolvedIdStr=resolveIdStr(rule["<eventKey>"]);} break;case"<enumValue>":if((parentContext[0]==="<enumType>")&&("<typeValue>"in rule)) {resolvedIdStr=resolveIdStr(rule["<typeValue>"]);} break;}} if(resolvedIdStr!=="") {uniIdStr=resolvedIdStr;} else if(kind in rule) {uniIdStr=rule[kind];}} else {var stringIDStr=app.typeIDToStringID(id);if(stringIDStr!=="") {uniIdStr=stringIDStr;}}}} return uniIdStr;} var incompatiblePlatformPath="";var getEventId=app.stringIDToTypeID("get");var targetKeyId=app.stringIDToTypeID("target");var propertyClassId=app.stringIDToTypeID("property");function getFromReference(ref) {var propertyId=0;var arr=[];do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(propertyId!==0) {var propertyCompact=that.buildCompact("<property>",getFromId(["<key>",propertyId],["<class>",desiredClassId]));arr.push(that.buildCompact(getFromId(["<class>",propertyClassId]),propertyCompact));propertyId=0;} var desiredCompact;var aFormID=ref.getForm();switch(aFormID) {case ReferenceFormType.CLASSTYPE:desiredCompact=that.buildCompact("<class>",null);break;case ReferenceFormType.ENUMERATED:var enumTypeContext=["<enumType>",ref.getEnumeratedType()];var enumValueContext=["<enumValue>",ref.getEnumeratedValue()];desiredCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case ReferenceFormType.IDENTIFIER:desiredCompact=that.buildCompact("<identifier>",ref.getIdentifier());break;case ReferenceFormType.INDEX:desiredCompact=that.buildCompact("<index>",ref.getIndex());break;case ReferenceFormType.NAME:desiredCompact=that.buildCompact("<name>",ref.getName());break;case ReferenceFormType.OFFSET:desiredCompact=that.buildCompact("<offset>",ref.getOffset());break;case ReferenceFormType.PROPERTY:if(desiredClassId===propertyClassId) {propertyId=ref.getProperty();} else {desiredCompact=that.buildCompact("<property>",getFromId(["<key>",ref.getProperty()],["<class>",desiredClassId]));} break;default:throw new Error("[jamEngine getFromReference] Unknown reference form type: "+aFormID);break;} if(desiredClassId!==propertyClassId) {arr.push(that.buildCompact(getFromId(["<class>",desiredClassId]),desiredCompact));} ref=ref.getContainer();} while(ref);return arr;} function getFromList(list) {var arr=[];var itemCount=list.count;for(var itemIndex=0;itemIndex<itemCount;itemIndex++) {var itemCompact;var typeID;try{typeID=list.getType(itemIndex);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:itemCompact=that.buildCompact("<boolean>",list.getBoolean(itemIndex));break;case DescValueType.CLASSTYPE:itemCompact=that.buildCompact("<class>",getFromId(["<class>",list.getClass(itemIndex)]));break;case DescValueType.DOUBLETYPE:itemCompact=that.buildCompact("<double>",list.getDouble(itemIndex));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",list.getEnumerationType(itemIndex)];var enumValueContext=["<enumValue>",list.getEnumerationValue(itemIndex)];itemCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:itemCompact=that.buildCompact("<integer>",list.getInteger(itemIndex));break;case DescValueType.LISTTYPE:itemCompact=that.buildCompact("<list>",getFromList(list.getList(itemIndex)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",list.getObjectType(itemIndex)];var objectValue=list.getObjectValue(itemIndex);itemCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=list.getPath(itemIndex);itemCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {itemCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:itemCompact=that.buildCompact("<reference>",getFromReference(list.getReference(itemIndex)));break;case DescValueType.STRINGTYPE:itemCompact=that.buildCompact("<string>",list.getString(itemIndex));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",list.getUnitDoubleType(itemIndex)];var doubleValue=list.getUnitDoubleValue(itemIndex);itemCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {itemCompact=that.buildCompact("<data>",list.getData(itemIndex));} else if(isLargeIntegerType) {itemCompact=that.buildCompact("<largeInteger>",list.getLargeInteger(itemIndex));} else {throw new Error("[jamEngine getFromList] Unknown descriptor value type: "+typeID);} break;} arr[itemIndex]=itemCompact;} return arr;} function getFromDescriptor(desc,parentContext) {if(desc) {var obj={};var keyCount;try{keyCount=desc.count;}catch(e){return null;} for(var keyIndex=0;keyIndex<keyCount;keyIndex++) {var keyID=desc.getKey(keyIndex);var keyString=getFromId(["<key>",keyID],parentContext);var keyCompact;var typeID;try{typeID=desc.getType(keyID);}catch(e){continue;} switch(typeID) {case DescValueType.BOOLEANTYPE:keyCompact=that.buildCompact("<boolean>",desc.getBoolean(keyID));break;case DescValueType.CLASSTYPE:keyCompact=that.buildCompact("<class>",getFromId(["<class>",desc.getClass(keyID)]));break;case DescValueType.DOUBLETYPE:keyCompact=that.buildCompact("<double>",desc.getDouble(keyID));break;case DescValueType.ENUMERATEDTYPE:var enumTypeContext=["<enumType>",desc.getEnumerationType(keyID)];var enumValueContext=["<enumValue>",desc.getEnumerationValue(keyID)];keyCompact=that.buildCompact("<enumerated>",that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext)));break;case DescValueType.INTEGERTYPE:keyCompact=that.buildCompact("<integer>",desc.getInteger(keyID));break;case DescValueType.LISTTYPE:keyCompact=that.buildCompact("<list>",getFromList(desc.getList(keyID)));break;case DescValueType.OBJECTTYPE:var objectTypeContext=["<class>",desc.getObjectType(keyID)];var objectValue=desc.getObjectValue(keyID);keyCompact=that.buildCompact("<object>",that.buildCompact(getFromId(objectTypeContext),getFromDescriptor(objectValue,objectTypeContext)));break;case DescValueType.ALIASTYPE:try {var fileRef=desc.getPath(keyID);keyCompact=that.buildCompact("<path>",fileRef.fsName);} catch(e) {keyCompact=that.buildCompact("<path>",incompatiblePlatformPath);} break;case DescValueType.REFERENCETYPE:keyCompact=that.buildCompact("<reference>",getFromReference(desc.getReference(keyID)));break;case DescValueType.STRINGTYPE:keyCompact=that.buildCompact("<string>",desc.getString(keyID));break;case DescValueType.UNITDOUBLE:var unitTypeContext=["<unit>",desc.getUnitDoubleType(keyID)];var doubleValue=desc.getUnitDoubleValue(keyID);keyCompact=that.buildCompact("<unitDouble>",that.buildCompact(getFromId(unitTypeContext),doubleValue));break;default:var isRawType;var isLargeIntegerType;try{isRawType=(typeID===DescValueType.RAWTYPE);}catch(e){} try{isLargeIntegerType=(typeID===DescValueType.LARGEINTEGERTYPE);}catch(e){} if(isRawType) {keyCompact=that.buildCompact("<data>",desc.getData(keyID));} else if(isLargeIntegerType) {keyCompact=that.buildCompact("<largeInteger>",desc.getLargeInteger(keyID));} else {throw new Error("[jamEngine getFromDescriptor] Unknown descriptor value type: "+typeID);} break;} obj[keyString]=keyCompact;} return obj;} else {return null;}} jamEngine.jsonToActionDescriptor=function(descriptorObj) {that=this;var actionDescriptor;if(descriptorObj) {actionDescriptor=new ActionDescriptor();putInDescriptor(actionDescriptor,descriptorObj);} return actionDescriptor;};jamEngine.jsonToActionReference=function(referenceArr) {that=this;var actionReference;if(referenceArr) {actionReference=new ActionReference();putInReference(actionReference,referenceArr);} return actionReference;};jamEngine.eventIdAndActionDescriptorToJson=function(eventId,actionDescriptor) {that=this;var eventIdContext=["<event>",eventId];return{"<event>":getFromId(eventIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,eventIdContext)};};jamEngine.classIdAndActionDescriptorToJson=function(classId,actionDescriptor) {that=this;var classIdContext=["<class>",classId];return{"<class>":getFromId(classIdContext),"<descriptor>":getFromDescriptor(actionDescriptor,classIdContext)};};jamEngine.actionReferenceToJson=function(actionReference) {that=this;return getFromReference(actionReference);};function getReferenceClassId(ref) {classId=0;do {try{var desiredClassId=ref.getDesiredClass();}catch(e){break;} if(desiredClassId!==propertyClassId) {classId=desiredClassId;break;} ref=ref.getContainer();} while(ref);return classId;} jamEngine.jsonPlay=function(eventUniIdStr,descriptorObj,displayDialogs) {var eventId=this.uniIdStrToId(eventUniIdStr);var desc=this.jsonToActionDescriptor(descriptorObj);var parentContext;if(eventId===getEventId) {var ref=desc.getReference(targetKeyId);parentContext=["<class>",getReferenceClassId(ref)];} else {parentContext=["<event>",eventId];} return getFromDescriptor(app.executeAction(eventId,desc,displayDialogs||this.displayDialogs),parentContext);};jamEngine.jsonGet=function(referenceArr) {var ref=this.jsonToActionReference(referenceArr);return getFromDescriptor(app.executeActionGet(ref),["<class>",getReferenceClassId(ref)]);};jamEngine.normalizeJsonItem=function(item,options) {function normalizeItem(item) {var explicit=that.parseCompact(item);var type=explicit[0];var value=explicit[1];var normalizedValue;switch(type) {case"<boolean>":case"<data>":case"<double>":case"<identifier>":case"<index>":case"<integer>":case"<largeInteger>":case"<name>":case"<offset>":case"<path>":case"<string>":normalizedValue=value;break;case"<class>":normalizedValue=value&&getFromId(["<class>",that.uniIdStrToId(value)]);break;case"<enumerated>":var enumerated=that.parseCompact(value);var enumTypeContext=["<enumType>",that.uniIdStrToId(enumerated[0])];var enumValueContext=["<enumValue>",that.uniIdStrToId(enumerated[1])];normalizedValue=that.buildCompact(getFromId(enumTypeContext),getFromId(enumValueContext,enumTypeContext));break;case"<list>":normalizedValue=[];for(var i=0;i<value.length;i++) {normalizedValue.push(normalizeItem(value[i]));} break;case"<object>":var object=that.parseCompact(value);var objectClassContext=["<class>",that.uniIdStrToId(object[0])];var objectDescriptor=object[1];var normalizedDescriptor;if(objectDescriptor===null) {normalizedDescriptor=null;} else {normalizedDescriptor={};for(var key in objectDescriptor) {if(objectDescriptor.hasOwnProperty(key)) {var objectKeyContext=["<key>",that.uniIdStrToId(key)];normalizedDescriptor[getFromId(objectKeyContext,objectClassContext)]=normalizeItem(objectDescriptor[key]);}}} normalizedValue=that.buildCompact(getFromId(objectClassContext),normalizedDescriptor);break;case"<property>":normalizedValue=getFromId(["<key>",that.uniIdStrToId(value)]);break;case"<reference>":normalizedValue=[];for(var i=0;i<value.length;i++) {var container=that.parseCompact(value[i]);normalizedValue.push(that.buildCompact(getFromId(["<class>",that.uniIdStrToId(container[0])]),normalizeItem(container[1])));} break;case"<unitDouble>":var unitDouble=that.parseCompact(value);var unitTypeContext=["<unit>",that.uniIdStrToId(unitDouble[0])];normalizedValue=that.buildCompact(getFromId(unitTypeContext),unitDouble[1]);break;default:throw new Error("[jamEngine.normalizeJsonItem] Unknown item type: "+type);break;} return that.buildCompact(type,normalizedValue);} that=this;var saveMeaningfulIds=this.meaningfulIds;var saveParseFriendly=this.parseFriendly;if(options&&(options.constructor===Object)) {if(typeof options.meaningfulIds!=='undefined') {this.meaningfulIds=options.meaningfulIds;} if(typeof options.parseFriendly!=='undefined') {this.parseFriendly=options.parseFriendly;}} var normalizedItem=normalizeItem(item);this.meaningfulIds=saveMeaningfulIds;this.parseFriendly=saveParseFriendly;return normalizedItem;};function simplifyRef(ref) {var simplifiedRef=[];for(var i=0;i<ref.length;i++) {var element=ref[i];var simplifiedElement={};var desiredClass=element[0];var form=element[1][0];var value=element[1][1];switch(form) {case"<class>":case"<identifier>":case"<index>":case"<name>":case"<offset>":case"<property":simplifiedElement[desiredClass]=value;break;case"<enumerated>":simplifiedElement[desiredClass]=value[1];break;default:throw new Error("[jamEngine simplifyRef] Unexpected element form: "+form);break;} simplifiedRef.push(simplifiedElement);} return simplifiedRef;} function simplifyItem(item,hook) {var simplifiedItem;var type=item[0];var value=item[1];switch(type) {case"<boolean>":case"<class>":case"<data>":case"<double>":case"<integer>":case"<largeInteger>":case"<path>":case"<string>":simplifiedItem=value;break;case"<list>":simplifiedItem=simplifyList(value,hook);break;case"<enumerated>":case"<unitDouble>":simplifiedItem=value[1];break;case"<object>":simplifiedItem=simplifyDesc(value[1],hook);break;case"<reference>":simplifiedItem=simplifyRef(value);break;default:throw new Error("[jamEngine simplifyItem] Unexpected item type: "+type);break;} return simplifiedItem;} function simplifyList(list,hook) {var simplifiedList=[];for(var i=0;i<list.length;i++) {simplifiedList.push(simplifyItem(list[i],hook));} return simplifiedList;} function simplifyDesc(desc,hook) {var getDefaultValue=function(desc,key){return simplifyItem(desc[key],hook);};var simplifiedDesc={};for(var key in desc) {if(desc.hasOwnProperty(key)) {var value=undefined;if(typeof hook==='function') {value=hook(desc,key,getDefaultValue);} if(typeof value==='undefined') {value=simplifyItem(desc[key],hook);} simplifiedDesc[key]=value;}} return simplifiedDesc;} jamEngine.simplifyObject=function(object,hookFunction) {return simplifyDesc((this.normalizeJsonItem(object,{meaningfulIds:true,parseFriendly:true}))[1][1],hookFunction);};jamEngine.simplifyList=function(list,hookFunction) {return simplifyList((this.normalizeJsonItem(list,{meaningfulIds:true,parseFriendly:true}))[1],hookFunction);};jamEngine.parseCompact=function(compact) {var result=[];if(compact.constructor===Object) {var keys=[];for(var k in compact) {if(compact.hasOwnProperty(k)) {keys.push(k);}} if(keys.length===1) {result[0]=keys[0];result[1]=compact[keys[0]];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else if(compact.constructor===Array) {if(compact.length===2) {result[0]=compact[0];result[1]=compact[1];} else {throw new Error("[jamEngine.parseCompact] Syntax error: "+compact.toSource());}} else {throw new Error("[jamEngine.parseCompact] JavaScript object or array expected");} return result;};jamEngine.compactToExplicit=function(compact,typeKey,valueKey) {var explicit={};var typeValue=this.parseCompact(compact);explicit[typeKey||"<type>"]=typeValue[0];explicit[valueKey||"<value>"]=typeValue[1];return explicit;};jamEngine.buildCompact=function(type,value) {var compact;if(typeof type==='string') {if(this.parseFriendly) {compact=[type,value];} else {compact={};compact[type]=value;}} else {throw new Error("[jamEngine.buildCompact] String expected");} return compact;};jamEngine.explicitToCompact=function(explicit,typeKey,valueKey) {var compact;if(explicit.constructor===Object) {compact=this.buildCompact(explicit[typeKey||"<type>"],explicit[valueKey||"<value>"]);} else {throw new Error("[jamEngine.explicitToCompact] JavaScript object expected");} return compact;};for(var charIdStr in conflictingStringIdStrs) {if(conflictingStringIdStrs.hasOwnProperty(charIdStr)) {var stringIdStrs=conflictingStringIdStrs[charIdStr];for(var index=stringIdStrs.length-1;index>=0;index--) {var stringIdStr=stringIdStrs[index];if(!(app.charIDToTypeID(charIdStr.substring(1,5))===app.stringIDToTypeID(stringIdStr))) {stringIdStrs.splice(index,1);}} if(stringIdStrs.length<2) {delete conflictingStringIdStrs[charIdStr];}}} for(var charIdStr in contextRules) {if(contextRules.hasOwnProperty(charIdStr)) {if(charIdStr in conflictingStringIdStrs) {var rule=contextRules[charIdStr];for(var kind in rule) {if(rule.hasOwnProperty(kind)) {switch(kind) {case"<class>":case"<event>":case"<enumType>":case"<enumValue>":case"<key>":case"<unknown>":if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind]+"\" are not equivalent ID strings");} break;case"<classKey>":case"<eventKey>":case"<typeValue>":for(var parent in rule[kind]) {if(rule[kind].hasOwnProperty(parent)) {if(app.charIDToTypeID(charIdStr.substring(1,5))!=app.stringIDToTypeID(rule[kind][parent])) {throw new Error("[jamEngine] "+"\""+charIdStr+"\" and \""+rule[kind][parent]+"\" are not equivalent ID strings");}}} break;}}}} else {delete contextRules[charIdStr];}}}}());}

jamEngine.meaningfulIds = false;
jamEngine.parseFriendly = false;

// Action “Màu Hàn 14”
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
				"<integer>": 65
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
				"<integer>": 0
			},
			"'SA_Y'":
			{
				"<integer>": 0
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
				"<integer>": 19
			},
			"'LA_O'":
			{
				"<integer>": 21
			},
			"'LA_Y'":
			{
				"<integer>": 0
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
				"<integer>": -25
			},
			"'LA_P'":
			{
				"<integer>": 26
			},
			"'LA_M'":
			{
				"<integer>": 34
			},
			"'STSH'":
			{
				"<integer>": 221
			},
			"'STSS'":
			{
				"<integer>": 8
			},
			"'STHH'":
			{
				"<integer>": 60
			},
			"'STHS'":
			{
				"<integer>": 11
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
				"<double>": 0
			},
			"'Cr12'":
			{
				"<integer>": 30
			},
			"'Hi12'":
			{
				"<integer>": 0
			},
			"'Sh12'":
			{
				"<integer>": 12
			},
			"'Wh12'":
			{
				"<integer>": 0
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
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:PaintBasedCorrections>\n    <rdf:Seq>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.100000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.076112\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.611819 0.165217</rdf:li>\n           <rdf:li>d 0.606166 0.186430</rdf:li>\n           <rdf:li>d 0.595796 0.203156</rdf:li>\n           <rdf:li>d 0.582514 0.191995</rdf:li>\n           <rdf:li>d 0.571576 0.176106</rdf:li>\n           <rdf:li>d 0.560807 0.159958</rdf:li>\n           <rdf:li>d 0.553145 0.140216</rdf:li>\n           <rdf:li>d 0.546292 0.119815</rdf:li>\n           <rdf:li>d 0.547846 0.142542</rdf:li>\n           <rdf:li>d 0.552566 0.164263</rdf:li>\n           <rdf:li>d 0.557331 0.185962</rdf:li>\n           <rdf:li>d 0.563702 0.206712</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.089482\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.436848 0.354783</rdf:li>\n           <rdf:li>d 0.419025 0.352351</rdf:li>\n           <rdf:li>d 0.401284 0.355883</rdf:li>\n           <rdf:li>d 0.383718 0.361012</rdf:li>\n           <rdf:li>d 0.373636 0.383205</rdf:li>\n           <rdf:li>d 0.369452 0.409321</rdf:li>\n           <rdf:li>d 0.365844 0.435629</rdf:li>\n           <rdf:li>d 0.361007 0.461490</rdf:li>\n           <rdf:li>d 0.355765 0.487172</rdf:li>\n           <rdf:li>d 0.351379 0.513212</rdf:li>\n           <rdf:li>d 0.346260 0.538950</rdf:li>\n           <rdf:li>d 0.341126 0.564681</rdf:li>\n           <rdf:li>d 0.339692 0.591455</rdf:li>\n           <rdf:li>d 0.348482 0.614851</rdf:li>\n           <rdf:li>d 0.360649 0.634549</rdf:li>\n           <rdf:li>d 0.371489 0.655921</rdf:li>\n           <rdf:li>d 0.382101 0.677549</rdf:li>\n           <rdf:li>d 0.391844 0.700080</rdf:li>\n           <rdf:li>d 0.401028 0.723133</rdf:li>\n           <rdf:li>d 0.411027 0.745410</rdf:li>\n           <rdf:li>d 0.421176 0.767534</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.000000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.550000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.209804\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.924681 0.413913</rdf:li>\n           <rdf:li>d 0.924681 0.476891</rdf:li>\n           <rdf:li>d 0.926959 0.539776</rdf:li>\n           <rdf:li>d 0.930698 0.602503</rdf:li>\n           <rdf:li>d 0.934437 0.665230</rdf:li>\n           <rdf:li>d 0.942848 0.726930</rdf:li>\n           <rdf:li>d 0.952123 0.788350</rdf:li>\n           <rdf:li>d 0.961398 0.849770</rdf:li>\n           <rdf:li>d 0.972079 0.910673</rdf:li>\n           <rdf:li>d 0.981807 0.971935</rdf:li>\n           <rdf:li>d 0.979506 0.909052</rdf:li>\n           <rdf:li>d 0.975647 0.846341</rdf:li>\n           <rdf:li>d 0.972417 0.783550</rdf:li>\n           <rdf:li>d 0.972198 0.720573</rdf:li>\n           <rdf:li>d 0.972190 0.657596</rdf:li>\n           <rdf:li>d 0.973210 0.594636</rdf:li>\n           <rdf:li>d 0.967095 0.532331</rdf:li>\n           <rdf:li>d 0.957490 0.471025</rdf:li>\n           <rdf:li>d 0.950757 0.408864</rdf:li>\n           <rdf:li>d 0.953431 0.346014</rdf:li>\n           <rdf:li>d 0.961288 0.284150</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.089482\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.116220</rdf:li>\n           <rdf:li>d 0.864426 0.297391</rdf:li>\n           <rdf:li>r 0.089482</rdf:li>\n           <rdf:li>d 0.848828 0.310560</rdf:li>\n           <rdf:li>d 0.833594 0.324655</rdf:li>\n           <rdf:li>d 0.818214 0.338389</rdf:li>\n           <rdf:li>d 0.802325 0.350748</rdf:li>\n           <rdf:li>d 0.787119 0.364911</rdf:li>\n           <rdf:li>d 0.771127 0.376969</rdf:li>\n           <rdf:li>d 0.754917 0.388350</rdf:li>\n           <rdf:li>d 0.738362 0.398552</rdf:li>\n           <rdf:li>d 0.721890 0.409055</rdf:li>\n           <rdf:li>d 0.705419 0.419557</rdf:li>\n           <rdf:li>d 0.688399 0.427862</rdf:li>\n           <rdf:li>d 0.671411 0.436308</rdf:li>\n           <rdf:li>d 0.654304 0.444199</rdf:li>\n           <rdf:li>d 0.636966 0.450854</rdf:li>\n           <rdf:li>d 0.619615 0.457435</rdf:li>\n           <rdf:li>d 0.602264 0.464016</rdf:li>\n           <rdf:li>d 0.585100 0.471619</rdf:li>\n           <rdf:li>d 0.568334 0.481014</rdf:li>\n           <rdf:li>d 0.582091 0.463835</rdf:li>\n           <rdf:li>d 0.595679 0.446354</rdf:li>\n           <rdf:li>d 0.606253 0.424684</rdf:li>\n           <rdf:li>d 0.617467 0.403751</rdf:li>\n           <rdf:li>d 0.632667 0.389574</rdf:li>\n           <rdf:li>d 0.649231 0.379402</rdf:li>\n           <rdf:li>d 0.665894 0.369604</rdf:li>\n           <rdf:li>d 0.683180 0.362650</rdf:li>\n           <rdf:li>d 0.700668 0.356946</rdf:li>\n           <rdf:li>d 0.718392 0.353223</rdf:li>\n           <rdf:li>d 0.736129 0.349650</rdf:li>\n           <rdf:li>d 0.753866 0.346078</rdf:li>\n           <rdf:li>d 0.771605 0.342524</rdf:li>\n           <rdf:li>d 0.789344 0.338969</rdf:li>\n           <rdf:li>d 0.807001 0.334590</rdf:li>\n           <rdf:li>d 0.824658 0.330210</rdf:li>\n           <rdf:li>d 0.842173 0.324700</rdf:li>\n           <rdf:li>d 0.859689 0.319189</rdf:li>\n           <rdf:li>d 0.877265 0.314133</rdf:li>\n           <rdf:li>d 0.894842 0.309077</rdf:li>\n           <rdf:li>d 0.912553 0.305222</rdf:li>\n           <rdf:li>d 0.902202 0.327133</rdf:li>\n           <rdf:li>d 0.891260 0.348389</rdf:li>\n           <rdf:li>d 0.878785 0.367647</rdf:li>\n           <rdf:li>d 0.864907 0.384606</rdf:li>\n           <rdf:li>d 0.850719 0.400978</rdf:li>\n           <rdf:li>d 0.836693 0.417661</rdf:li>\n           <rdf:li>d 0.823383 0.435616</rdf:li>\n           <rdf:li>d 0.808871 0.451333</rdf:li>\n           <rdf:li>d 0.793822 0.465871</rdf:li>\n           <rdf:li>d 0.778068 0.478612</rdf:li>\n           <rdf:li>d 0.762313 0.491353</rdf:li>\n           <rdf:li>d 0.746480 0.503873</rdf:li>\n           <rdf:li>d 0.730514 0.516007</rdf:li>\n           <rdf:li>d 0.714315 0.527427</rdf:li>\n           <rdf:li>d 0.698117 0.538847</rdf:li>\n           <rdf:li>d 0.682886 0.552949</rdf:li>\n           <rdf:li>d 0.669110 0.570095</rdf:li>\n           <rdf:li>d 0.661715 0.594554</rdf:li>\n           <rdf:li>d 0.655747 0.619877</rdf:li>\n           <rdf:li>d 0.650812 0.645695</rdf:li>\n           <rdf:li>d 0.647575 0.672112</rdf:li>\n           <rdf:li>d 0.644338 0.698529</rdf:li>\n           <rdf:li>d 0.642337 0.725221</rdf:li>\n           <rdf:li>d 0.639767 0.751803</rdf:li>\n           <rdf:li>d 0.636626 0.778246</rdf:li>\n           <rdf:li>d 0.634421 0.804901</rdf:li>\n           <rdf:li>d 0.632216 0.831556</rdf:li>\n           <rdf:li>d 0.630353 0.858270</rdf:li>\n           <rdf:li>d 0.628415 0.884973</rdf:li>\n           <rdf:li>d 0.626241 0.911634</rdf:li>\n           <rdf:li>d 0.625277 0.938455</rdf:li>\n           <rdf:li>d 0.626292 0.965271</rdf:li>\n           <rdf:li>d 0.628640 0.991899</rdf:li>\n           <rdf:li>d 0.637168 0.968285</rdf:li>\n           <rdf:li>d 0.640654 0.941940</rdf:li>\n           <rdf:li>d 0.641536 0.915112</rdf:li>\n           <rdf:li>d 0.640321 0.888314</rdf:li>\n           <rdf:li>d 0.638294 0.861627</rdf:li>\n           <rdf:li>d 0.634818 0.835278</rdf:li>\n           <rdf:li>d 0.631483 0.808889</rdf:li>\n           <rdf:li>d 0.642415 0.830155</rdf:li>\n           <rdf:li>d 0.651622 0.853188</rdf:li>\n           <rdf:li>d 0.660958 0.876103</rdf:li>\n           <rdf:li>d 0.669946 0.899331</rdf:li>\n           <rdf:li>d 0.679450 0.922090</rdf:li>\n           <rdf:li>d 0.691310 0.942205</rdf:li>\n           <rdf:li>d 0.704284 0.960706</rdf:li>\n           <rdf:li>d 0.717258 0.979207</rdf:li>\n           <rdf:li>d 0.732490 0.993307</rdf:li>\n           <rdf:li>d 0.748519 1.005253</rdf:li>\n           <rdf:li>d 0.765143 1.015201</rdf:li>\n           <rdf:li>d 0.782558 1.021386</rdf:li>\n           <rdf:li>d 0.799974 1.027570</rdf:li>\n           <rdf:li>d 0.817842 1.029062</rdf:li>\n           <rdf:li>d 0.835737 1.029397</rdf:li>\n           <rdf:li>d 0.853618 1.028283</rdf:li>\n           <rdf:li>d 0.870934 1.021498</rdf:li>\n           <rdf:li>d 0.864867 0.996228</rdf:li>\n           <rdf:li>d 0.853805 0.975114</rdf:li>\n           <rdf:li>d 0.842896 0.953821</rdf:li>\n           <rdf:li>d 0.834758 0.929899</rdf:li>\n           <rdf:li>d 0.832482 0.903257</rdf:li>\n           <rdf:li>d 0.837200 0.877347</rdf:li>\n           <rdf:li>d 0.845364 0.853445</rdf:li>\n           <rdf:li>d 0.827756 0.848647</rdf:li>\n           <rdf:li>d 0.810703 0.856796</rdf:li>\n           <rdf:li>d 0.793926 0.866144</rdf:li>\n           <rdf:li>d 0.777148 0.875491</rdf:li>\n           <rdf:li>d 0.760272 0.884431</rdf:li>\n           <rdf:li>d 0.743396 0.893370</rdf:li>\n           <rdf:li>d 0.726262 0.901129</rdf:li>\n           <rdf:li>d 0.709633 0.911057</rdf:li>\n           <rdf:li>d 0.693598 0.922983</rdf:li>\n           <rdf:li>d 0.682061 0.943517</rdf:li>\n           <rdf:li>d 0.667877 0.959895</rdf:li>\n           <rdf:li>d 0.651079 0.969160</rdf:li>\n           <rdf:li>d 0.633687 0.975491</rdf:li>\n           <rdf:li>d 0.616295 0.981823</rdf:li>\n           <rdf:li>d 0.598618 0.986012</rdf:li>\n           <rdf:li>d 0.580761 0.987801</rdf:li>\n           <rdf:li>d 0.562865 0.987811</rdf:li>\n           <rdf:li>d 0.544969 0.987821</rdf:li>\n           <rdf:li>d 0.527104 0.986213</rdf:li>\n           <rdf:li>d 0.509240 0.984606</rdf:li>\n           <rdf:li>d 0.491576 0.980289</rdf:li>\n           <rdf:li>d 0.473946 0.975675</rdf:li>\n           <rdf:li>d 0.456316 0.971061</rdf:li>\n           <rdf:li>d 0.438711 0.966232</rdf:li>\n           <rdf:li>d 0.421106 0.961403</rdf:li>\n           <rdf:li>d 0.403499 0.956594</rdf:li>\n           <rdf:li>d 0.385892 0.951787</rdf:li>\n           <rdf:li>d 0.400698 0.936700</rdf:li>\n           <rdf:li>d 0.417214 0.926355</rdf:li>\n           <rdf:li>d 0.433730 0.916010</rdf:li>\n           <rdf:li>d 0.451136 0.909767</rdf:li>\n           <rdf:li>d 0.468687 0.904521</rdf:li>\n           <rdf:li>d 0.486422 0.900921</rdf:li>\n           <rdf:li>d 0.469187 0.908152</rdf:li>\n           <rdf:li>d 0.451413 0.911290</rdf:li>\n           <rdf:li>d 0.433651 0.914571</rdf:li>\n           <rdf:li>d 0.415888 0.917852</rdf:li>\n           <rdf:li>d 0.398103 0.920839</rdf:li>\n           <rdf:li>d 0.380289 0.923411</rdf:li>\n           <rdf:li>d 0.362475 0.925983</rdf:li>\n           <rdf:li>d 0.344792 0.930124</rdf:li>\n           <rdf:li>d 0.327223 0.935236</rdf:li>\n           <rdf:li>d 0.309513 0.939103</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.102851\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.439166 0.586087</rdf:li>\n           <rdf:li>d 0.454646 0.606417</rdf:li>\n           <rdf:li>d 0.468863 0.628730</rdf:li>\n           <rdf:li>d 0.483809 0.649942</rdf:li>\n           <rdf:li>d 0.498438 0.671646</rdf:li>\n           <rdf:li>d 0.513004 0.693446</rdf:li>\n           <rdf:li>d 0.526502 0.716742</rdf:li>\n           <rdf:li>d 0.539410 0.740780</rdf:li>\n           <rdf:li>d 0.552431 0.764681</rdf:li>\n           <rdf:li>d 0.540884 0.739131</rdf:li>\n           <rdf:li>d 0.530189 0.712759</rdf:li>\n           <rdf:li>d 0.520038 0.685907</rdf:li>\n           <rdf:li>d 0.511905 0.657549</rdf:li>\n           <rdf:li>d 0.504172 0.628941</rdf:li>\n           <rdf:li>d 0.497759 0.599606</rdf:li>\n           <rdf:li>d 0.492641 0.569704</rdf:li>\n           <rdf:li>d 0.485922 0.540524</rdf:li>\n           <rdf:li>d 0.481179 0.510483</rdf:li>\n           <rdf:li>d 0.475116 0.480982</rdf:li>\n           <rdf:li>d 0.468466 0.451766</rdf:li>\n           <rdf:li>d 0.450321 0.437223</rdf:li>\n           <rdf:li>d 0.429809 0.434904</rdf:li>\n           <rdf:li>d 0.419463 0.461588</rdf:li>\n           <rdf:li>d 0.412859 0.490826</rdf:li>\n           <rdf:li>d 0.409634 0.521318</rdf:li>\n           <rdf:li>d 0.409246 0.552185</rdf:li>\n           <rdf:li>d 0.411159 0.582925</rdf:li>\n           <rdf:li>d 0.419226 0.611325</rdf:li>\n           <rdf:li>d 0.430560 0.637088</rdf:li>\n           <rdf:li>d 0.442188 0.662555</rdf:li>\n           <rdf:li>d 0.454903 0.686824</rdf:li>\n           <rdf:li>d 0.469176 0.709055</rdf:li>\n           <rdf:li>d 0.484017 0.730434</rdf:li>\n           <rdf:li>d 0.498207 0.752785</rdf:li>\n           <rdf:li>d 0.512714 0.774673</rdf:li>\n           <rdf:li>d 0.527718 0.795793</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.209804\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>r 0.156327</rdf:li>\n           <rdf:li>d 0.164542 0.440000</rdf:li>\n           <rdf:li>r 0.209804</rdf:li>\n           <rdf:li>d 0.181071 0.497886</rdf:li>\n           <rdf:li>d 0.200051 0.554053</rdf:li>\n           <rdf:li>d 0.219584 0.609791</rdf:li>\n           <rdf:li>d 0.240706 0.664209</rdf:li>\n           <rdf:li>d 0.261827 0.718626</rdf:li>\n           <rdf:li>d 0.278561 0.776379</rdf:li>\n           <rdf:li>d 0.295411 0.834056</rdf:li>\n           <rdf:li>d 0.286009 0.772679</rdf:li>\n           <rdf:li>d 0.270641 0.714077</rdf:li>\n           <rdf:li>d 0.252037 0.657628</rdf:li>\n           <rdf:li>d 0.228704 0.605285</rdf:li>\n           <rdf:li>d 0.202872 0.555655</rdf:li>\n           <rdf:li>d 0.170685 0.515252</rdf:li>\n           <rdf:li>d 0.131130 0.494232</rdf:li>\n           <rdf:li>d 0.090364 0.509148</rdf:li>\n           <rdf:li>d 0.079053 0.569795</rdf:li>\n           <rdf:li>d 0.067131 0.630177</rdf:li>\n           <rdf:li>d 0.056933 0.691266</rdf:li>\n           <rdf:li>d 0.054336 0.754123</rdf:li>\n           <rdf:li>d 0.054428 0.817101</rdf:li>\n           <rdf:li>d 0.055405 0.880062</rdf:li>\n           <rdf:li>d 0.055616 0.943039</rdf:li>\n           <rdf:li>d 0.057676 1.005941</rdf:li>\n           <rdf:li>d 0.085746 1.052752</rdf:li>\n           <rdf:li>d 0.125361 1.073515</rdf:li>\n           <rdf:li>d 0.166823 1.083199</rdf:li>\n           <rdf:li>d 0.208695 1.087282</rdf:li>\n           <rdf:li>d 0.250626 1.089664</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n     <rdf:li>\n      <rdf:Description\n       crs:What=\"Correction\"\n       crs:CorrectionAmount=\"1.000000\"\n       crs:CorrectionActive=\"true\"\n       crs:LocalExposure=\"0.000000\"\n       crs:LocalSaturation=\"0.000000\"\n       crs:LocalContrast=\"0.000000\"\n       crs:LocalClarity=\"0.000000\"\n       crs:LocalSharpness=\"0.000000\"\n       crs:LocalBrightness=\"0.000000\"\n       crs:LocalToningHue=\"0.000000\"\n       crs:LocalToningSaturation=\"0.000000\"\n       crs:LocalExposure2012=\"0.000000\"\n       crs:LocalContrast2012=\"0.400000\"\n       crs:LocalHighlights2012=\"0.000000\"\n       crs:LocalShadows2012=\"0.000000\"\n       crs:LocalWhites2012=\"0.000000\"\n       crs:LocalBlacks2012=\"0.000000\"\n       crs:LocalClarity2012=\"0.000000\"\n       crs:LocalLuminanceNoise=\"0.000000\"\n       crs:LocalMoire=\"0.000000\"\n       crs:LocalDefringe=\"0.000000\"\n       crs:LocalTemperature=\"0.000000\"\n       crs:LocalTint=\"0.000000\">\n      <crs:CorrectionMasks>\n       <rdf:Seq>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.129589\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.945539 0.560000</rdf:li>\n           <rdf:li>d 0.935760 0.596024</rdf:li>\n           <rdf:li>d 0.927023 0.632647</rdf:li>\n           <rdf:li>d 0.922497 0.670948</rdf:li>\n           <rdf:li>d 0.917972 0.709250</rdf:li>\n           <rdf:li>d 0.918457 0.748142</rdf:li>\n           <rdf:li>d 0.920481 0.786923</rdf:li>\n           <rdf:li>d 0.922504 0.825703</rdf:li>\n           <rdf:li>d 0.926253 0.864194</rdf:li>\n           <rdf:li>d 0.931467 0.902298</rdf:li>\n           <rdf:li>d 0.937504 0.940127</rdf:li>\n           <rdf:li>d 0.944471 0.977594</rdf:li>\n           <rdf:li>d 0.939524 0.939410</rdf:li>\n           <rdf:li>d 0.935133 0.901073</rdf:li>\n           <rdf:li>d 0.931834 0.862490</rdf:li>\n           <rdf:li>d 0.928332 0.823948</rdf:li>\n           <rdf:li>d 0.924638 0.785446</rdf:li>\n           <rdf:li>d 0.920240 0.747110</rdf:li>\n           <rdf:li>d 0.916299 0.708664</rdf:li>\n           <rdf:li>d 0.911309 0.670492</rdf:li>\n           <rdf:li>d 0.905984 0.632423</rdf:li>\n           <rdf:li>d 0.900490 0.594408</rdf:li>\n           <rdf:li>d 0.895244 0.556313</rdf:li>\n           <rdf:li>d 0.891537 0.517814</rdf:li>\n           <rdf:li>d 0.885793 0.479882</rdf:li>\n           <rdf:li>d 0.894382 0.516583</rdf:li>\n           <rdf:li>d 0.903031 0.553253</rdf:li>\n           <rdf:li>d 0.910663 0.590427</rdf:li>\n           <rdf:li>d 0.918296 0.627601</rdf:li>\n           <rdf:li>d 0.925158 0.665112</rdf:li>\n           <rdf:li>d 0.932021 0.702623</rdf:li>\n           <rdf:li>d 0.938493 0.740290</rdf:li>\n           <rdf:li>d 0.944965 0.777957</rdf:li>\n           <rdf:li>d 0.951857 0.815456</rdf:li>\n           <rdf:li>d 0.958036 0.853233</rdf:li>\n           <rdf:li>d 0.964215 0.891011</rdf:li>\n           <rdf:li>d 0.971425 0.928375</rdf:li>\n           <rdf:li>d 0.978455 0.965816</rdf:li>\n           <rdf:li>d 0.985810 1.003116</rdf:li>\n           <rdf:li>d 0.963960 0.982195</rdf:li>\n           <rdf:li>d 0.945103 0.955508</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n        <rdf:li>\n         <rdf:Description\n          crs:What=\"Mask/Paint\"\n          crs:MaskValue=\"0.400000\"\n          crs:Radius=\"0.183066\"\n          crs:Flow=\"1.000000\"\n          crs:CenterWeight=\"0.000000\">\n         <crs:Dabs>\n          <rdf:Seq>\n           <rdf:li>d 0.136732 0.452174</rdf:li>\n           <rdf:li>d 0.138139 0.507085</rdf:li>\n           <rdf:li>d 0.141602 0.561790</rdf:li>\n           <rdf:li>d 0.145065 0.616495</rdf:li>\n           <rdf:li>d 0.149802 0.670985</rdf:li>\n           <rdf:li>d 0.154539 0.725475</rdf:li>\n           <rdf:li>d 0.160646 0.779657</rdf:li>\n           <rdf:li>d 0.166753 0.833838</rdf:li>\n           <rdf:li>d 0.175912 0.887043</rdf:li>\n           <rdf:li>d 0.187430 0.939205</rdf:li>\n           <rdf:li>d 0.198948 0.991366</rdf:li>\n           <rdf:li>d 0.212336 1.042512</rdf:li>\n           <rdf:li>d 0.228689 1.091678</rdf:li>\n           <rdf:li>d 0.208673 1.045665</rdf:li>\n           <rdf:li>d 0.199173 0.992595</rdf:li>\n           <rdf:li>d 0.200064 0.937660</rdf:li>\n           <rdf:li>d 0.206567 0.883582</rdf:li>\n           <rdf:li>d 0.220819 0.832965</rdf:li>\n           <rdf:li>d 0.234450 0.781963</rdf:li>\n           <rdf:li>d 0.248646 0.731311</rdf:li>\n           <rdf:li>d 0.260422 0.679279</rdf:li>\n           <rdf:li>d 0.240603 0.725483</rdf:li>\n           <rdf:li>d 0.214974 0.764727</rdf:li>\n           <rdf:li>d 0.189345 0.803971</rdf:li>\n           <rdf:li>d 0.159437 0.835669</rdf:li>\n           <rdf:li>d 0.129529 0.867367</rdf:li>\n           <rdf:li>d 0.097196 0.893150</rdf:li>\n           <rdf:li>d 0.064863 0.918932</rdf:li>\n           <rdf:li>d 0.031221 0.940615</rdf:li>\n           <rdf:li>d -0.002422 0.962297</rdf:li>\n           <rdf:li>d -0.036527 0.982285</rdf:li>\n           <rdf:li>d -0.028269 0.928749</rdf:li>\n           <rdf:li>d -0.009889 0.881223</rdf:li>\n           <rdf:li>d 0.009498 0.834608</rdf:li>\n           <rdf:li>d 0.028897 0.788004</rdf:li>\n           <rdf:li>d 0.048485 0.741577</rdf:li>\n           <rdf:li>d 0.062342 0.690713</rdf:li>\n           <rdf:li>d 0.073731 0.638488</rdf:li>\n           <rdf:li>d 0.083981 0.585734</rdf:li>\n           <rdf:li>d 0.111995 0.621117</rdf:li>\n           <rdf:li>d 0.140008 0.656500</rdf:li>\n           <rdf:li>d 0.162956 0.699319</rdf:li>\n           <rdf:li>d 0.185437 0.742692</rdf:li>\n           <rdf:li>d 0.207919 0.786064</rdf:li>\n           <rdf:li>d 0.230397 0.829440</rdf:li>\n           <rdf:li>d 0.251190 0.874671</rdf:li>\n           <rdf:li>d 0.270289 0.921553</rdf:li>\n           <rdf:li>d 0.289386 0.968438</rdf:li>\n           <rdf:li>d 0.307372 1.016301</rdf:li>\n          </rdf:Seq>\n         </crs:Dabs>\n         </rdf:Description>\n        </rdf:li>\n       </rdf:Seq>\n      </crs:CorrectionMasks>\n      <crs:CorrectionRangeMask\n       crs:Version=\"+1\"\n       crs:Type=\"0\"\n       crs:ColorAmount=\"0.500000\"\n       crs:LumMin=\"0.000000\"\n       crs:LumMax=\"1.000000\"\n       crs:LumFeather=\"0.500000\"\n       crs:DepthMin=\"0.000000\"\n       crs:DepthMax=\"1.000000\"\n       crs:DepthFeather=\"0.500000\"/>\n      </rdf:Description>\n     </rdf:li>\n    </rdf:Seq>\n   </crs:PaintBasedCorrections>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n"
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
				"<string>": "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\">\n   <crs:Preset>\n    <rdf:Description\n     crs:Name=\"AG9X6974\"\n     crs:Amount=\"1.000000\"\n     crs:UUID=\"84AAF35792A69DE874F643677A5AC912\"\n     crs:SupportsAmount=\"false\"\n     crs:LookAmount=\"0.000000\">\n    <crs:Parameters>\n     <rdf:Description\n      crs:Version=\"11.3\"\n      crs:ProcessVersion=\"11.0\"\n      crs:WhiteBalance=\"As Shot\"\n      crs:IncrementalTemperature=\"0\"\n      crs:IncrementalTint=\"0\"\n      crs:Saturation=\"0\"\n      crs:Sharpness=\"25\"\n      crs:LuminanceSmoothing=\"0\"\n      crs:ColorNoiseReduction=\"25\"\n      crs:VignetteAmount=\"0\"\n      crs:ShadowTint=\"0\"\n      crs:RedHue=\"0\"\n      crs:RedSaturation=\"0\"\n      crs:GreenHue=\"0\"\n      crs:GreenSaturation=\"0\"\n      crs:BlueHue=\"0\"\n      crs:BlueSaturation=\"+65\"\n      crs:Vibrance=\"0\"\n      crs:HueAdjustmentRed=\"0\"\n      crs:HueAdjustmentOrange=\"0\"\n      crs:HueAdjustmentYellow=\"0\"\n      crs:HueAdjustmentGreen=\"0\"\n      crs:HueAdjustmentAqua=\"0\"\n      crs:HueAdjustmentBlue=\"0\"\n      crs:HueAdjustmentPurple=\"0\"\n      crs:HueAdjustmentMagenta=\"0\"\n      crs:SaturationAdjustmentRed=\"0\"\n      crs:SaturationAdjustmentOrange=\"0\"\n      crs:SaturationAdjustmentYellow=\"0\"\n      crs:SaturationAdjustmentGreen=\"0\"\n      crs:SaturationAdjustmentAqua=\"0\"\n      crs:SaturationAdjustmentBlue=\"0\"\n      crs:SaturationAdjustmentPurple=\"0\"\n      crs:SaturationAdjustmentMagenta=\"0\"\n      crs:LuminanceAdjustmentRed=\"+19\"\n      crs:LuminanceAdjustmentOrange=\"+21\"\n      crs:LuminanceAdjustmentYellow=\"0\"\n      crs:LuminanceAdjustmentGreen=\"0\"\n      crs:LuminanceAdjustmentAqua=\"0\"\n      crs:LuminanceAdjustmentBlue=\"-25\"\n      crs:LuminanceAdjustmentPurple=\"+26\"\n      crs:LuminanceAdjustmentMagenta=\"+34\"\n      crs:SplitToningShadowHue=\"221\"\n      crs:SplitToningShadowSaturation=\"8\"\n      crs:SplitToningHighlightHue=\"60\"\n      crs:SplitToningHighlightSaturation=\"11\"\n      crs:SplitToningBalance=\"0\"\n      crs:ParametricShadows=\"0\"\n      crs:ParametricDarks=\"0\"\n      crs:ParametricLights=\"0\"\n      crs:ParametricHighlights=\"0\"\n      crs:ParametricShadowSplit=\"25\"\n      crs:ParametricMidtoneSplit=\"50\"\n      crs:ParametricHighlightSplit=\"75\"\n      crs:SharpenRadius=\"+1.0\"\n      crs:SharpenDetail=\"25\"\n      crs:SharpenEdgeMasking=\"0\"\n      crs:PostCropVignetteAmount=\"0\"\n      crs:GrainAmount=\"0\"\n      crs:ColorNoiseReductionDetail=\"50\"\n      crs:ColorNoiseReductionSmoothness=\"50\"\n      crs:LensProfileEnable=\"0\"\n      crs:LensManualDistortionAmount=\"0\"\n      crs:PerspectiveVertical=\"0\"\n      crs:PerspectiveHorizontal=\"0\"\n      crs:PerspectiveRotate=\"0.0\"\n      crs:PerspectiveScale=\"100\"\n      crs:PerspectiveAspect=\"0\"\n      crs:PerspectiveUpright=\"0\"\n      crs:AutoLateralCA=\"0\"\n      crs:Exposure2012=\"0.00\"\n      crs:Contrast2012=\"+30\"\n      crs:Highlights2012=\"0\"\n      crs:Shadows2012=\"+12\"\n      crs:Whites2012=\"0\"\n      crs:Blacks2012=\"0\"\n      crs:Clarity2012=\"0\"\n      crs:DefringePurpleAmount=\"0\"\n      crs:DefringePurpleHueLo=\"30\"\n      crs:DefringePurpleHueHi=\"70\"\n      crs:DefringeGreenAmount=\"0\"\n      crs:DefringeGreenHueLo=\"40\"\n      crs:DefringeGreenHueHi=\"60\"\n      crs:Dehaze=\"0\"\n      crs:ConvertToGrayscale=\"False\"\n      crs:OverrideLookVignette=\"False\"\n      crs:ToneCurveName=\"Medium Contrast\"\n      crs:ToneCurveName2012=\"Linear\"\n      crs:CameraProfile=\"Embedded\"\n      crs:CameraProfileDigest=\"54650A341B5B5CCAE8442D0B43A92BCE\"\n      crs:LensProfileSetup=\"LensDefaults\">\n     <crs:ToneCurve>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>32, 22</rdf:li>\n       <rdf:li>64, 56</rdf:li>\n       <rdf:li>128, 128</rdf:li>\n       <rdf:li>192, 196</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurve>\n     <crs:ToneCurveRed>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurveRed>\n     <crs:ToneCurveGreen>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurveGreen>\n     <crs:ToneCurveBlue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurveBlue>\n     <crs:ToneCurvePV2012>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012>\n     <crs:ToneCurvePV2012Red>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Red>\n     <crs:ToneCurvePV2012Green>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Green>\n     <crs:ToneCurvePV2012Blue>\n      <rdf:Seq>\n       <rdf:li>0, 0</rdf:li>\n       <rdf:li>255, 255</rdf:li>\n      </rdf:Seq>\n     </crs:ToneCurvePV2012Blue>\n     <crs:PaintBasedCorrections>\n      <rdf:Seq>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.100000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.076112\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.611819 0.165217</rdf:li>\n             <rdf:li>d 0.606166 0.186430</rdf:li>\n             <rdf:li>d 0.595796 0.203156</rdf:li>\n             <rdf:li>d 0.582514 0.191995</rdf:li>\n             <rdf:li>d 0.571576 0.176106</rdf:li>\n             <rdf:li>d 0.560807 0.159958</rdf:li>\n             <rdf:li>d 0.553145 0.140216</rdf:li>\n             <rdf:li>d 0.546292 0.119815</rdf:li>\n             <rdf:li>d 0.547846 0.142542</rdf:li>\n             <rdf:li>d 0.552566 0.164263</rdf:li>\n             <rdf:li>d 0.557331 0.185962</rdf:li>\n             <rdf:li>d 0.563702 0.206712</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.089482\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.436848 0.354783</rdf:li>\n             <rdf:li>d 0.419025 0.352351</rdf:li>\n             <rdf:li>d 0.401284 0.355883</rdf:li>\n             <rdf:li>d 0.383718 0.361012</rdf:li>\n             <rdf:li>d 0.373636 0.383205</rdf:li>\n             <rdf:li>d 0.369452 0.409321</rdf:li>\n             <rdf:li>d 0.365844 0.435629</rdf:li>\n             <rdf:li>d 0.361007 0.461490</rdf:li>\n             <rdf:li>d 0.355765 0.487172</rdf:li>\n             <rdf:li>d 0.351379 0.513212</rdf:li>\n             <rdf:li>d 0.346260 0.538950</rdf:li>\n             <rdf:li>d 0.341126 0.564681</rdf:li>\n             <rdf:li>d 0.339692 0.591455</rdf:li>\n             <rdf:li>d 0.348482 0.614851</rdf:li>\n             <rdf:li>d 0.360649 0.634549</rdf:li>\n             <rdf:li>d 0.371489 0.655921</rdf:li>\n             <rdf:li>d 0.382101 0.677549</rdf:li>\n             <rdf:li>d 0.391844 0.700080</rdf:li>\n             <rdf:li>d 0.401028 0.723133</rdf:li>\n             <rdf:li>d 0.411027 0.745410</rdf:li>\n             <rdf:li>d 0.421176 0.767534</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.000000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.550000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.209804\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.924681 0.413913</rdf:li>\n             <rdf:li>d 0.924681 0.476891</rdf:li>\n             <rdf:li>d 0.926959 0.539776</rdf:li>\n             <rdf:li>d 0.930698 0.602503</rdf:li>\n             <rdf:li>d 0.934437 0.665230</rdf:li>\n             <rdf:li>d 0.942848 0.726930</rdf:li>\n             <rdf:li>d 0.952123 0.788350</rdf:li>\n             <rdf:li>d 0.961398 0.849770</rdf:li>\n             <rdf:li>d 0.972079 0.910673</rdf:li>\n             <rdf:li>d 0.981807 0.971935</rdf:li>\n             <rdf:li>d 0.979506 0.909052</rdf:li>\n             <rdf:li>d 0.975647 0.846341</rdf:li>\n             <rdf:li>d 0.972417 0.783550</rdf:li>\n             <rdf:li>d 0.972198 0.720573</rdf:li>\n             <rdf:li>d 0.972190 0.657596</rdf:li>\n             <rdf:li>d 0.973210 0.594636</rdf:li>\n             <rdf:li>d 0.967095 0.532331</rdf:li>\n             <rdf:li>d 0.957490 0.471025</rdf:li>\n             <rdf:li>d 0.950757 0.408864</rdf:li>\n             <rdf:li>d 0.953431 0.346014</rdf:li>\n             <rdf:li>d 0.961288 0.284150</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.089482\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>r 0.116220</rdf:li>\n             <rdf:li>d 0.864426 0.297391</rdf:li>\n             <rdf:li>r 0.089482</rdf:li>\n             <rdf:li>d 0.848828 0.310560</rdf:li>\n             <rdf:li>d 0.833594 0.324655</rdf:li>\n             <rdf:li>d 0.818214 0.338389</rdf:li>\n             <rdf:li>d 0.802325 0.350748</rdf:li>\n             <rdf:li>d 0.787119 0.364911</rdf:li>\n             <rdf:li>d 0.771127 0.376969</rdf:li>\n             <rdf:li>d 0.754917 0.388350</rdf:li>\n             <rdf:li>d 0.738362 0.398552</rdf:li>\n             <rdf:li>d 0.721890 0.409055</rdf:li>\n             <rdf:li>d 0.705419 0.419557</rdf:li>\n             <rdf:li>d 0.688399 0.427862</rdf:li>\n             <rdf:li>d 0.671411 0.436308</rdf:li>\n             <rdf:li>d 0.654304 0.444199</rdf:li>\n             <rdf:li>d 0.636966 0.450854</rdf:li>\n             <rdf:li>d 0.619615 0.457435</rdf:li>\n             <rdf:li>d 0.602264 0.464016</rdf:li>\n             <rdf:li>d 0.585100 0.471619</rdf:li>\n             <rdf:li>d 0.568334 0.481014</rdf:li>\n             <rdf:li>d 0.582091 0.463835</rdf:li>\n             <rdf:li>d 0.595679 0.446354</rdf:li>\n             <rdf:li>d 0.606253 0.424684</rdf:li>\n             <rdf:li>d 0.617467 0.403751</rdf:li>\n             <rdf:li>d 0.632667 0.389574</rdf:li>\n             <rdf:li>d 0.649231 0.379402</rdf:li>\n             <rdf:li>d 0.665894 0.369604</rdf:li>\n             <rdf:li>d 0.683180 0.362650</rdf:li>\n             <rdf:li>d 0.700668 0.356946</rdf:li>\n             <rdf:li>d 0.718392 0.353223</rdf:li>\n             <rdf:li>d 0.736129 0.349650</rdf:li>\n             <rdf:li>d 0.753866 0.346078</rdf:li>\n             <rdf:li>d 0.771605 0.342524</rdf:li>\n             <rdf:li>d 0.789344 0.338969</rdf:li>\n             <rdf:li>d 0.807001 0.334590</rdf:li>\n             <rdf:li>d 0.824658 0.330210</rdf:li>\n             <rdf:li>d 0.842173 0.324700</rdf:li>\n             <rdf:li>d 0.859689 0.319189</rdf:li>\n             <rdf:li>d 0.877265 0.314133</rdf:li>\n             <rdf:li>d 0.894842 0.309077</rdf:li>\n             <rdf:li>d 0.912553 0.305222</rdf:li>\n             <rdf:li>d 0.902202 0.327133</rdf:li>\n             <rdf:li>d 0.891260 0.348389</rdf:li>\n             <rdf:li>d 0.878785 0.367647</rdf:li>\n             <rdf:li>d 0.864907 0.384606</rdf:li>\n             <rdf:li>d 0.850719 0.400978</rdf:li>\n             <rdf:li>d 0.836693 0.417661</rdf:li>\n             <rdf:li>d 0.823383 0.435616</rdf:li>\n             <rdf:li>d 0.808871 0.451333</rdf:li>\n             <rdf:li>d 0.793822 0.465871</rdf:li>\n             <rdf:li>d 0.778068 0.478612</rdf:li>\n             <rdf:li>d 0.762313 0.491353</rdf:li>\n             <rdf:li>d 0.746480 0.503873</rdf:li>\n             <rdf:li>d 0.730514 0.516007</rdf:li>\n             <rdf:li>d 0.714315 0.527427</rdf:li>\n             <rdf:li>d 0.698117 0.538847</rdf:li>\n             <rdf:li>d 0.682886 0.552949</rdf:li>\n             <rdf:li>d 0.669110 0.570095</rdf:li>\n             <rdf:li>d 0.661715 0.594554</rdf:li>\n             <rdf:li>d 0.655747 0.619877</rdf:li>\n             <rdf:li>d 0.650812 0.645695</rdf:li>\n             <rdf:li>d 0.647575 0.672112</rdf:li>\n             <rdf:li>d 0.644338 0.698529</rdf:li>\n             <rdf:li>d 0.642337 0.725221</rdf:li>\n             <rdf:li>d 0.639767 0.751803</rdf:li>\n             <rdf:li>d 0.636626 0.778246</rdf:li>\n             <rdf:li>d 0.634421 0.804901</rdf:li>\n             <rdf:li>d 0.632216 0.831556</rdf:li>\n             <rdf:li>d 0.630353 0.858270</rdf:li>\n             <rdf:li>d 0.628415 0.884973</rdf:li>\n             <rdf:li>d 0.626241 0.911634</rdf:li>\n             <rdf:li>d 0.625277 0.938455</rdf:li>\n             <rdf:li>d 0.626292 0.965271</rdf:li>\n             <rdf:li>d 0.628640 0.991899</rdf:li>\n             <rdf:li>d 0.637168 0.968285</rdf:li>\n             <rdf:li>d 0.640654 0.941940</rdf:li>\n             <rdf:li>d 0.641536 0.915112</rdf:li>\n             <rdf:li>d 0.640321 0.888314</rdf:li>\n             <rdf:li>d 0.638294 0.861627</rdf:li>\n             <rdf:li>d 0.634818 0.835278</rdf:li>\n             <rdf:li>d 0.631483 0.808889</rdf:li>\n             <rdf:li>d 0.642415 0.830155</rdf:li>\n             <rdf:li>d 0.651622 0.853188</rdf:li>\n             <rdf:li>d 0.660958 0.876103</rdf:li>\n             <rdf:li>d 0.669946 0.899331</rdf:li>\n             <rdf:li>d 0.679450 0.922090</rdf:li>\n             <rdf:li>d 0.691310 0.942205</rdf:li>\n             <rdf:li>d 0.704284 0.960706</rdf:li>\n             <rdf:li>d 0.717258 0.979207</rdf:li>\n             <rdf:li>d 0.732490 0.993307</rdf:li>\n             <rdf:li>d 0.748519 1.005253</rdf:li>\n             <rdf:li>d 0.765143 1.015201</rdf:li>\n             <rdf:li>d 0.782558 1.021386</rdf:li>\n             <rdf:li>d 0.799974 1.027570</rdf:li>\n             <rdf:li>d 0.817842 1.029062</rdf:li>\n             <rdf:li>d 0.835737 1.029397</rdf:li>\n             <rdf:li>d 0.853618 1.028283</rdf:li>\n             <rdf:li>d 0.870934 1.021498</rdf:li>\n             <rdf:li>d 0.864867 0.996228</rdf:li>\n             <rdf:li>d 0.853805 0.975114</rdf:li>\n             <rdf:li>d 0.842896 0.953821</rdf:li>\n             <rdf:li>d 0.834758 0.929899</rdf:li>\n             <rdf:li>d 0.832482 0.903257</rdf:li>\n             <rdf:li>d 0.837200 0.877347</rdf:li>\n             <rdf:li>d 0.845364 0.853445</rdf:li>\n             <rdf:li>d 0.827756 0.848647</rdf:li>\n             <rdf:li>d 0.810703 0.856796</rdf:li>\n             <rdf:li>d 0.793926 0.866144</rdf:li>\n             <rdf:li>d 0.777148 0.875491</rdf:li>\n             <rdf:li>d 0.760272 0.884431</rdf:li>\n             <rdf:li>d 0.743396 0.893370</rdf:li>\n             <rdf:li>d 0.726262 0.901129</rdf:li>\n             <rdf:li>d 0.709633 0.911057</rdf:li>\n             <rdf:li>d 0.693598 0.922983</rdf:li>\n             <rdf:li>d 0.682061 0.943517</rdf:li>\n             <rdf:li>d 0.667877 0.959895</rdf:li>\n             <rdf:li>d 0.651079 0.969160</rdf:li>\n             <rdf:li>d 0.633687 0.975491</rdf:li>\n             <rdf:li>d 0.616295 0.981823</rdf:li>\n             <rdf:li>d 0.598618 0.986012</rdf:li>\n             <rdf:li>d 0.580761 0.987801</rdf:li>\n             <rdf:li>d 0.562865 0.987811</rdf:li>\n             <rdf:li>d 0.544969 0.987821</rdf:li>\n             <rdf:li>d 0.527104 0.986213</rdf:li>\n             <rdf:li>d 0.509240 0.984606</rdf:li>\n             <rdf:li>d 0.491576 0.980289</rdf:li>\n             <rdf:li>d 0.473946 0.975675</rdf:li>\n             <rdf:li>d 0.456316 0.971061</rdf:li>\n             <rdf:li>d 0.438711 0.966232</rdf:li>\n             <rdf:li>d 0.421106 0.961403</rdf:li>\n             <rdf:li>d 0.403499 0.956594</rdf:li>\n             <rdf:li>d 0.385892 0.951787</rdf:li>\n             <rdf:li>d 0.400698 0.936700</rdf:li>\n             <rdf:li>d 0.417214 0.926355</rdf:li>\n             <rdf:li>d 0.433730 0.916010</rdf:li>\n             <rdf:li>d 0.451136 0.909767</rdf:li>\n             <rdf:li>d 0.468687 0.904521</rdf:li>\n             <rdf:li>d 0.486422 0.900921</rdf:li>\n             <rdf:li>d 0.469187 0.908152</rdf:li>\n             <rdf:li>d 0.451413 0.911290</rdf:li>\n             <rdf:li>d 0.433651 0.914571</rdf:li>\n             <rdf:li>d 0.415888 0.917852</rdf:li>\n             <rdf:li>d 0.398103 0.920839</rdf:li>\n             <rdf:li>d 0.380289 0.923411</rdf:li>\n             <rdf:li>d 0.362475 0.925983</rdf:li>\n             <rdf:li>d 0.344792 0.930124</rdf:li>\n             <rdf:li>d 0.327223 0.935236</rdf:li>\n             <rdf:li>d 0.309513 0.939103</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.102851\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.439166 0.586087</rdf:li>\n             <rdf:li>d 0.454646 0.606417</rdf:li>\n             <rdf:li>d 0.468863 0.628730</rdf:li>\n             <rdf:li>d 0.483809 0.649942</rdf:li>\n             <rdf:li>d 0.498438 0.671646</rdf:li>\n             <rdf:li>d 0.513004 0.693446</rdf:li>\n             <rdf:li>d 0.526502 0.716742</rdf:li>\n             <rdf:li>d 0.539410 0.740780</rdf:li>\n             <rdf:li>d 0.552431 0.764681</rdf:li>\n             <rdf:li>d 0.540884 0.739131</rdf:li>\n             <rdf:li>d 0.530189 0.712759</rdf:li>\n             <rdf:li>d 0.520038 0.685907</rdf:li>\n             <rdf:li>d 0.511905 0.657549</rdf:li>\n             <rdf:li>d 0.504172 0.628941</rdf:li>\n             <rdf:li>d 0.497759 0.599606</rdf:li>\n             <rdf:li>d 0.492641 0.569704</rdf:li>\n             <rdf:li>d 0.485922 0.540524</rdf:li>\n             <rdf:li>d 0.481179 0.510483</rdf:li>\n             <rdf:li>d 0.475116 0.480982</rdf:li>\n             <rdf:li>d 0.468466 0.451766</rdf:li>\n             <rdf:li>d 0.450321 0.437223</rdf:li>\n             <rdf:li>d 0.429809 0.434904</rdf:li>\n             <rdf:li>d 0.419463 0.461588</rdf:li>\n             <rdf:li>d 0.412859 0.490826</rdf:li>\n             <rdf:li>d 0.409634 0.521318</rdf:li>\n             <rdf:li>d 0.409246 0.552185</rdf:li>\n             <rdf:li>d 0.411159 0.582925</rdf:li>\n             <rdf:li>d 0.419226 0.611325</rdf:li>\n             <rdf:li>d 0.430560 0.637088</rdf:li>\n             <rdf:li>d 0.442188 0.662555</rdf:li>\n             <rdf:li>d 0.454903 0.686824</rdf:li>\n             <rdf:li>d 0.469176 0.709055</rdf:li>\n             <rdf:li>d 0.484017 0.730434</rdf:li>\n             <rdf:li>d 0.498207 0.752785</rdf:li>\n             <rdf:li>d 0.512714 0.774673</rdf:li>\n             <rdf:li>d 0.527718 0.795793</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.209804\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>r 0.156327</rdf:li>\n             <rdf:li>d 0.164542 0.440000</rdf:li>\n             <rdf:li>r 0.209804</rdf:li>\n             <rdf:li>d 0.181071 0.497886</rdf:li>\n             <rdf:li>d 0.200051 0.554053</rdf:li>\n             <rdf:li>d 0.219584 0.609791</rdf:li>\n             <rdf:li>d 0.240706 0.664209</rdf:li>\n             <rdf:li>d 0.261827 0.718626</rdf:li>\n             <rdf:li>d 0.278561 0.776379</rdf:li>\n             <rdf:li>d 0.295411 0.834056</rdf:li>\n             <rdf:li>d 0.286009 0.772679</rdf:li>\n             <rdf:li>d 0.270641 0.714077</rdf:li>\n             <rdf:li>d 0.252037 0.657628</rdf:li>\n             <rdf:li>d 0.228704 0.605285</rdf:li>\n             <rdf:li>d 0.202872 0.555655</rdf:li>\n             <rdf:li>d 0.170685 0.515252</rdf:li>\n             <rdf:li>d 0.131130 0.494232</rdf:li>\n             <rdf:li>d 0.090364 0.509148</rdf:li>\n             <rdf:li>d 0.079053 0.569795</rdf:li>\n             <rdf:li>d 0.067131 0.630177</rdf:li>\n             <rdf:li>d 0.056933 0.691266</rdf:li>\n             <rdf:li>d 0.054336 0.754123</rdf:li>\n             <rdf:li>d 0.054428 0.817101</rdf:li>\n             <rdf:li>d 0.055405 0.880062</rdf:li>\n             <rdf:li>d 0.055616 0.943039</rdf:li>\n             <rdf:li>d 0.057676 1.005941</rdf:li>\n             <rdf:li>d 0.085746 1.052752</rdf:li>\n             <rdf:li>d 0.125361 1.073515</rdf:li>\n             <rdf:li>d 0.166823 1.083199</rdf:li>\n             <rdf:li>d 0.208695 1.087282</rdf:li>\n             <rdf:li>d 0.250626 1.089664</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n       <rdf:li>\n        <rdf:Description\n         crs:What=\"Correction\"\n         crs:CorrectionAmount=\"1.000000\"\n         crs:CorrectionActive=\"true\"\n         crs:LocalExposure=\"0.000000\"\n         crs:LocalSaturation=\"0.000000\"\n         crs:LocalContrast=\"0.000000\"\n         crs:LocalClarity=\"0.000000\"\n         crs:LocalSharpness=\"0.000000\"\n         crs:LocalBrightness=\"0.000000\"\n         crs:LocalToningHue=\"0.000000\"\n         crs:LocalToningSaturation=\"0.000000\"\n         crs:LocalExposure2012=\"0.000000\"\n         crs:LocalContrast2012=\"0.400000\"\n         crs:LocalHighlights2012=\"0.000000\"\n         crs:LocalShadows2012=\"0.000000\"\n         crs:LocalWhites2012=\"0.000000\"\n         crs:LocalBlacks2012=\"0.000000\"\n         crs:LocalClarity2012=\"0.000000\"\n         crs:LocalLuminanceNoise=\"0.000000\"\n         crs:LocalMoire=\"0.000000\"\n         crs:LocalDefringe=\"0.000000\"\n         crs:LocalTemperature=\"0.000000\"\n         crs:LocalTint=\"0.000000\">\n        <crs:CorrectionMasks>\n         <rdf:Seq>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.129589\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.945539 0.560000</rdf:li>\n             <rdf:li>d 0.935760 0.596024</rdf:li>\n             <rdf:li>d 0.927023 0.632647</rdf:li>\n             <rdf:li>d 0.922497 0.670948</rdf:li>\n             <rdf:li>d 0.917972 0.709250</rdf:li>\n             <rdf:li>d 0.918457 0.748142</rdf:li>\n             <rdf:li>d 0.920481 0.786923</rdf:li>\n             <rdf:li>d 0.922504 0.825703</rdf:li>\n             <rdf:li>d 0.926253 0.864194</rdf:li>\n             <rdf:li>d 0.931467 0.902298</rdf:li>\n             <rdf:li>d 0.937504 0.940127</rdf:li>\n             <rdf:li>d 0.944471 0.977594</rdf:li>\n             <rdf:li>d 0.939524 0.939410</rdf:li>\n             <rdf:li>d 0.935133 0.901073</rdf:li>\n             <rdf:li>d 0.931834 0.862490</rdf:li>\n             <rdf:li>d 0.928332 0.823948</rdf:li>\n             <rdf:li>d 0.924638 0.785446</rdf:li>\n             <rdf:li>d 0.920240 0.747110</rdf:li>\n             <rdf:li>d 0.916299 0.708664</rdf:li>\n             <rdf:li>d 0.911309 0.670492</rdf:li>\n             <rdf:li>d 0.905984 0.632423</rdf:li>\n             <rdf:li>d 0.900490 0.594408</rdf:li>\n             <rdf:li>d 0.895244 0.556313</rdf:li>\n             <rdf:li>d 0.891537 0.517814</rdf:li>\n             <rdf:li>d 0.885793 0.479882</rdf:li>\n             <rdf:li>d 0.894382 0.516583</rdf:li>\n             <rdf:li>d 0.903031 0.553253</rdf:li>\n             <rdf:li>d 0.910663 0.590427</rdf:li>\n             <rdf:li>d 0.918296 0.627601</rdf:li>\n             <rdf:li>d 0.925158 0.665112</rdf:li>\n             <rdf:li>d 0.932021 0.702623</rdf:li>\n             <rdf:li>d 0.938493 0.740290</rdf:li>\n             <rdf:li>d 0.944965 0.777957</rdf:li>\n             <rdf:li>d 0.951857 0.815456</rdf:li>\n             <rdf:li>d 0.958036 0.853233</rdf:li>\n             <rdf:li>d 0.964215 0.891011</rdf:li>\n             <rdf:li>d 0.971425 0.928375</rdf:li>\n             <rdf:li>d 0.978455 0.965816</rdf:li>\n             <rdf:li>d 0.985810 1.003116</rdf:li>\n             <rdf:li>d 0.963960 0.982195</rdf:li>\n             <rdf:li>d 0.945103 0.955508</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n          <rdf:li>\n           <rdf:Description\n            crs:What=\"Mask/Paint\"\n            crs:MaskValue=\"0.400000\"\n            crs:Radius=\"0.183066\"\n            crs:Flow=\"1.000000\"\n            crs:CenterWeight=\"0.000000\">\n           <crs:Dabs>\n            <rdf:Seq>\n             <rdf:li>d 0.136732 0.452174</rdf:li>\n             <rdf:li>d 0.138139 0.507085</rdf:li>\n             <rdf:li>d 0.141602 0.561790</rdf:li>\n             <rdf:li>d 0.145065 0.616495</rdf:li>\n             <rdf:li>d 0.149802 0.670985</rdf:li>\n             <rdf:li>d 0.154539 0.725475</rdf:li>\n             <rdf:li>d 0.160646 0.779657</rdf:li>\n             <rdf:li>d 0.166753 0.833838</rdf:li>\n             <rdf:li>d 0.175912 0.887043</rdf:li>\n             <rdf:li>d 0.187430 0.939205</rdf:li>\n             <rdf:li>d 0.198948 0.991366</rdf:li>\n             <rdf:li>d 0.212336 1.042512</rdf:li>\n             <rdf:li>d 0.228689 1.091678</rdf:li>\n             <rdf:li>d 0.208673 1.045665</rdf:li>\n             <rdf:li>d 0.199173 0.992595</rdf:li>\n             <rdf:li>d 0.200064 0.937660</rdf:li>\n             <rdf:li>d 0.206567 0.883582</rdf:li>\n             <rdf:li>d 0.220819 0.832965</rdf:li>\n             <rdf:li>d 0.234450 0.781963</rdf:li>\n             <rdf:li>d 0.248646 0.731311</rdf:li>\n             <rdf:li>d 0.260422 0.679279</rdf:li>\n             <rdf:li>d 0.240603 0.725483</rdf:li>\n             <rdf:li>d 0.214974 0.764727</rdf:li>\n             <rdf:li>d 0.189345 0.803971</rdf:li>\n             <rdf:li>d 0.159437 0.835669</rdf:li>\n             <rdf:li>d 0.129529 0.867367</rdf:li>\n             <rdf:li>d 0.097196 0.893150</rdf:li>\n             <rdf:li>d 0.064863 0.918932</rdf:li>\n             <rdf:li>d 0.031221 0.940615</rdf:li>\n             <rdf:li>d -0.002422 0.962297</rdf:li>\n             <rdf:li>d -0.036527 0.982285</rdf:li>\n             <rdf:li>d -0.028269 0.928749</rdf:li>\n             <rdf:li>d -0.009889 0.881223</rdf:li>\n             <rdf:li>d 0.009498 0.834608</rdf:li>\n             <rdf:li>d 0.028897 0.788004</rdf:li>\n             <rdf:li>d 0.048485 0.741577</rdf:li>\n             <rdf:li>d 0.062342 0.690713</rdf:li>\n             <rdf:li>d 0.073731 0.638488</rdf:li>\n             <rdf:li>d 0.083981 0.585734</rdf:li>\n             <rdf:li>d 0.111995 0.621117</rdf:li>\n             <rdf:li>d 0.140008 0.656500</rdf:li>\n             <rdf:li>d 0.162956 0.699319</rdf:li>\n             <rdf:li>d 0.185437 0.742692</rdf:li>\n             <rdf:li>d 0.207919 0.786064</rdf:li>\n             <rdf:li>d 0.230397 0.829440</rdf:li>\n             <rdf:li>d 0.251190 0.874671</rdf:li>\n             <rdf:li>d 0.270289 0.921553</rdf:li>\n             <rdf:li>d 0.289386 0.968438</rdf:li>\n             <rdf:li>d 0.307372 1.016301</rdf:li>\n            </rdf:Seq>\n           </crs:Dabs>\n           </rdf:Description>\n          </rdf:li>\n         </rdf:Seq>\n        </crs:CorrectionMasks>\n        <crs:CorrectionRangeMask\n         crs:Version=\"+1\"\n         crs:Type=\"0\"\n         crs:ColorAmount=\"0.500000\"\n         crs:LumMin=\"0.000000\"\n         crs:LumMax=\"1.000000\"\n         crs:LumFeather=\"0.500000\"\n         crs:DepthMin=\"0.000000\"\n         crs:DepthMax=\"1.000000\"\n         crs:DepthFeather=\"0.500000\"/>\n        </rdf:Description>\n       </rdf:li>\n      </rdf:Seq>\n     </crs:PaintBasedCorrections>\n     </rdf:Description>\n    </crs:Parameters>\n    </rdf:Description>\n   </crs:Preset>\n  </rdf:Description>\n </rdf:RDF>\n</x:xmpmeta>\n"
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
						"<integer>": 20
					},
					{
						"<integer>": 21
					},
					{
						"<integer>": 22
					},
					{
						"<integer>": 23
					},
					{
						"<integer>": 24
					},
					{
						"<integer>": 25
					},
					{
						"<integer>": 26
					},
					{
						"<integer>": 27
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
