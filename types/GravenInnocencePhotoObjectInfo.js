"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravenInnocencePhotoObjectInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GravenInnocencePhotoObjectInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GravenInnocencePhotoObjectInfo", [
            { no: 4, name: "object_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "finish_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { objectId: 0, param: 0, finishTime: 0 };
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
                case /* uint32 object_id */ 4:
                    message.objectId = reader.uint32();
                    break;
                case /* uint32 param */ 15:
                    message.param = reader.uint32();
                    break;
                case /* uint32 finish_time */ 10:
                    message.finishTime = reader.uint32();
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
        /* uint32 object_id = 4; */
        if (message.objectId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.objectId);
        /* uint32 param = 15; */
        if (message.param !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.param);
        /* uint32 finish_time = 10; */
        if (message.finishTime !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.finishTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GravenInnocencePhotoObjectInfo
 */
exports.GravenInnocencePhotoObjectInfo = new GravenInnocencePhotoObjectInfo$Type();
