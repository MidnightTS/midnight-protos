"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePreviewBlueprintRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeSceneArrangementInfo_1 = require("./HomeSceneArrangementInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomePreviewBlueprintRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("HomePreviewBlueprintRsp", [
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "scene_arrangement_info", kind: "message", T: () => HomeSceneArrangementInfo_1.HomeSceneArrangementInfo },
            { no: 9, name: "share_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, shareCode: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* HomeSceneArrangementInfo scene_arrangement_info */ 5:
                    message.sceneArrangementInfo = HomeSceneArrangementInfo_1.HomeSceneArrangementInfo.internalBinaryRead(reader, reader.uint32(), options, message.sceneArrangementInfo);
                    break;
                case /* string share_code */ 9:
                    message.shareCode = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* HomeSceneArrangementInfo scene_arrangement_info = 5; */
        if (message.sceneArrangementInfo)
            HomeSceneArrangementInfo_1.HomeSceneArrangementInfo.internalBinaryWrite(message.sceneArrangementInfo, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string share_code = 9; */
        if (message.shareCode !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.shareCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomePreviewBlueprintRsp
 */
exports.HomePreviewBlueprintRsp = new HomePreviewBlueprintRsp$Type();
