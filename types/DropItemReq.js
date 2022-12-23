"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropItemReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const StoreType_1 = require("./StoreType");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class DropItemReq$Type extends runtime_5.MessageType {
    constructor() {
        super("DropItemReq", [
            { no: 12, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 13, name: "store_type", kind: "enum", T: () => ["StoreType", StoreType_1.StoreType, "STORE_TYPE_"] },
            { no: 4, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { storeType: 0, count: 0, guid: 0n };
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
                case /* Vector pos */ 12:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* StoreType store_type */ 13:
                    message.storeType = reader.int32();
                    break;
                case /* uint32 count */ 4:
                    message.count = reader.uint32();
                    break;
                case /* uint64 guid */ 9:
                    message.guid = reader.uint64().toBigInt();
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
        /* Vector pos = 12; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* StoreType store_type = 13; */
        if (message.storeType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.storeType);
        /* uint32 count = 4; */
        if (message.count !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.count);
        /* uint64 guid = 9; */
        if (message.guid !== 0n)
            writer.tag(9, runtime_1.WireType.Varint).uint64(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DropItemReq
 */
exports.DropItemReq = new DropItemReq$Type();
