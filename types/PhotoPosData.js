"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoPosData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class PhotoPosData$Type extends runtime_5.MessageType {
    constructor() {
        super("PhotoPosData", [
            { no: 10, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "pos_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "center", kind: "message", T: () => Vector_1.Vector },
            { no: 13, name: "is_view", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { openTime: 0, posId: 0, isView: false, isOpen: false };
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
                case /* uint32 open_time */ 10:
                    message.openTime = reader.uint32();
                    break;
                case /* uint32 pos_id */ 9:
                    message.posId = reader.uint32();
                    break;
                case /* Vector center */ 7:
                    message.center = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* bool is_view */ 13:
                    message.isView = reader.bool();
                    break;
                case /* bool is_open */ 3:
                    message.isOpen = reader.bool();
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
        /* uint32 open_time = 10; */
        if (message.openTime !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.openTime);
        /* uint32 pos_id = 9; */
        if (message.posId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.posId);
        /* Vector center = 7; */
        if (message.center)
            Vector_1.Vector.internalBinaryWrite(message.center, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_view = 13; */
        if (message.isView !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isView);
        /* bool is_open = 3; */
        if (message.isOpen !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PhotoPosData
 */
exports.PhotoPosData = new PhotoPosData$Type();
