"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBargainDataRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BargainSnapshot_1 = require("./BargainSnapshot");
// @generated message type with reflection information, may provide speed optimized methods
class GetBargainDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetBargainDataRsp", [
            { no: 4, name: "bargain_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "snapshot", kind: "message", T: () => BargainSnapshot_1.BargainSnapshot },
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { bargainId: 0, retcode: 0 };
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
                case /* uint32 bargain_id */ 4:
                    message.bargainId = reader.uint32();
                    break;
                case /* BargainSnapshot snapshot */ 15:
                    message.snapshot = BargainSnapshot_1.BargainSnapshot.internalBinaryRead(reader, reader.uint32(), options, message.snapshot);
                    break;
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
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
        /* uint32 bargain_id = 4; */
        if (message.bargainId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.bargainId);
        /* BargainSnapshot snapshot = 15; */
        if (message.snapshot)
            BargainSnapshot_1.BargainSnapshot.internalBinaryWrite(message.snapshot, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetBargainDataRsp
 */
exports.GetBargainDataRsp = new GetBargainDataRsp$Type();
