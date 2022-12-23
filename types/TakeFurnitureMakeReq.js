"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeFurnitureMakeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class TakeFurnitureMakeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("TakeFurnitureMakeReq", [
            { no: 12, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_fast_finish", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "make_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { index: 0, isFastFinish: false, makeId: 0 };
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
                case /* uint32 index */ 12:
                    message.index = reader.uint32();
                    break;
                case /* bool is_fast_finish */ 2:
                    message.isFastFinish = reader.bool();
                    break;
                case /* uint32 make_id */ 7:
                    message.makeId = reader.uint32();
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
        /* uint32 index = 12; */
        if (message.index !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.index);
        /* bool is_fast_finish = 2; */
        if (message.isFastFinish !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isFastFinish);
        /* uint32 make_id = 7; */
        if (message.makeId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.makeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeFurnitureMakeReq
 */
exports.TakeFurnitureMakeReq = new TakeFurnitureMakeReq$Type();
