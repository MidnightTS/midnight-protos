"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBlueprintBriefMuipData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlueprintBriefMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.HomeBlueprintBriefMuipData", [
            { no: 1, name: "share_code", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "owner_uid", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "module_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "block_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_allow_copy", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "create_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional string share_code */ 1:
                    message.shareCode = reader.string();
                    break;
                case /* optional uint32 owner_uid */ 2:
                    message.ownerUid = reader.uint32();
                    break;
                case /* optional uint32 module_id */ 3:
                    message.moduleId = reader.uint32();
                    break;
                case /* optional uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 block_id */ 5:
                    message.blockId = reader.uint32();
                    break;
                case /* optional bool is_allow_copy */ 6:
                    message.isAllowCopy = reader.bool();
                    break;
                case /* optional uint32 create_time */ 7:
                    message.createTime = reader.uint32();
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
        /* optional string share_code = 1; */
        if (message.shareCode !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.shareCode);
        /* optional uint32 owner_uid = 2; */
        if (message.ownerUid !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.ownerUid);
        /* optional uint32 module_id = 3; */
        if (message.moduleId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.moduleId);
        /* optional uint32 scene_id = 4; */
        if (message.sceneId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 block_id = 5; */
        if (message.blockId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.blockId);
        /* optional bool is_allow_copy = 6; */
        if (message.isAllowCopy !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isAllowCopy);
        /* optional uint32 create_time = 7; */
        if (message.createTime !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.createTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.HomeBlueprintBriefMuipData
 */
exports.HomeBlueprintBriefMuipData = new HomeBlueprintBriefMuipData$Type();
