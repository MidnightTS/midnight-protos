"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropItemRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const StoreType_1 = require("./StoreType");
// @generated message type with reflection information, may provide speed optimized methods
class DropItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("DropItemRsp", [
            { no: 6, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "store_type", kind: "enum", T: () => ["StoreType", StoreType_1.StoreType, "STORE_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { guid: 0n, retcode: 0, storeType: 0 };
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
                case /* uint64 guid */ 6:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* StoreType store_type */ 2:
                    message.storeType = reader.int32();
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
        /* uint64 guid = 6; */
        if (message.guid !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.guid);
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* StoreType store_type = 2; */
        if (message.storeType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.storeType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DropItemRsp
 */
exports.DropItemRsp = new DropItemRsp$Type();
