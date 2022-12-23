"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBlueprintSlotInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlueprintSlotInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeBlueprintSlotInfo", [
            { no: 12, name: "create_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "share_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "module_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "block_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "slot_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_allow_copy", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { createTime: 0, sceneId: 0, shareCode: "", moduleId: 0, blockId: 0, slotId: 0, isAllowCopy: false };
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
                case /* uint32 create_time */ 12:
                    message.createTime = reader.uint32();
                    break;
                case /* uint32 scene_id */ 10:
                    message.sceneId = reader.uint32();
                    break;
                case /* string share_code */ 9:
                    message.shareCode = reader.string();
                    break;
                case /* uint32 module_id */ 3:
                    message.moduleId = reader.uint32();
                    break;
                case /* uint32 block_id */ 2:
                    message.blockId = reader.uint32();
                    break;
                case /* uint32 slot_id */ 8:
                    message.slotId = reader.uint32();
                    break;
                case /* bool is_allow_copy */ 6:
                    message.isAllowCopy = reader.bool();
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
        /* uint32 create_time = 12; */
        if (message.createTime !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.createTime);
        /* uint32 scene_id = 10; */
        if (message.sceneId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* string share_code = 9; */
        if (message.shareCode !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.shareCode);
        /* uint32 module_id = 3; */
        if (message.moduleId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.moduleId);
        /* uint32 block_id = 2; */
        if (message.blockId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.blockId);
        /* uint32 slot_id = 8; */
        if (message.slotId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.slotId);
        /* bool is_allow_copy = 6; */
        if (message.isAllowCopy !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isAllowCopy);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBlueprintSlotInfo
 */
exports.HomeBlueprintSlotInfo = new HomeBlueprintSlotInfo$Type();
