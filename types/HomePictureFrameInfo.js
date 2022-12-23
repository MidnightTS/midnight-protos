"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePictureFrameInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomePictureFrameInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomePictureFrameInfo", [
            { no: 9, name: "picture_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { pictureId: 0, guid: 0 };
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
                case /* uint32 picture_id */ 9:
                    message.pictureId = reader.uint32();
                    break;
                case /* uint32 guid */ 5:
                    message.guid = reader.uint32();
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
        /* uint32 picture_id = 9; */
        if (message.pictureId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.pictureId);
        /* uint32 guid = 5; */
        if (message.guid !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomePictureFrameInfo
 */
exports.HomePictureFrameInfo = new HomePictureFrameInfo$Type();
