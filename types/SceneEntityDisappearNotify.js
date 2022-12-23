"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneEntityDisappearNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const VisionType_1 = require("./VisionType");
// @generated message type with reflection information, may provide speed optimized methods
class SceneEntityDisappearNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneEntityDisappearNotify", [
            { no: 15, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "disappear_type", kind: "enum", T: () => ["VisionType", VisionType_1.VisionType, "VISION_TYPE_"] },
            { no: 13, name: "entity_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { param: 0, disappearType: 0, entityList: [] };
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
                case /* uint32 param */ 15:
                    message.param = reader.uint32();
                    break;
                case /* VisionType disappear_type */ 12:
                    message.disappearType = reader.int32();
                    break;
                case /* repeated uint32 entity_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.entityList.push(reader.uint32());
                    else
                        message.entityList.push(reader.uint32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 param = 15; */
        if (message.param !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.param);
        /* VisionType disappear_type = 12; */
        if (message.disappearType !== 0)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.disappearType);
        /* repeated uint32 entity_list = 13; */
        if (message.entityList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.entityList.length; i++)
                writer.uint32(message.entityList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneEntityDisappearNotify
 */
exports.SceneEntityDisappearNotify = new SceneEntityDisappearNotify$Type();
