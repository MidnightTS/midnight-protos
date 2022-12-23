"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGallerySummerTimeV2BoatInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGallerySummerTimeV2BoatInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGallerySummerTimeV2BoatInfo", [
            { no: 6, name: "used_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "param1", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "param3", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param2", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { usedTime: 0, param1: 0, param3: 0, param2: 0 };
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
                case /* uint32 used_time */ 6:
                    message.usedTime = reader.uint32();
                    break;
                case /* uint32 param1 */ 5:
                    message.param1 = reader.uint32();
                    break;
                case /* uint32 param3 */ 12:
                    message.param3 = reader.uint32();
                    break;
                case /* uint32 param2 */ 3:
                    message.param2 = reader.uint32();
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
        /* uint32 used_time = 6; */
        if (message.usedTime !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.usedTime);
        /* uint32 param1 = 5; */
        if (message.param1 !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.param1);
        /* uint32 param3 = 12; */
        if (message.param3 !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.param3);
        /* uint32 param2 = 3; */
        if (message.param2 !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.param2);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGallerySummerTimeV2BoatInfo
 */
exports.SceneGallerySummerTimeV2BoatInfo = new SceneGallerySummerTimeV2BoatInfo$Type();
