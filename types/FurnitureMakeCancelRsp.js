"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeCancelRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FurnitureMakeSlot_1 = require("./FurnitureMakeSlot");
// @generated message type with reflection information, may provide speed optimized methods
class FurnitureMakeCancelRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("FurnitureMakeCancelRsp", [
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "make_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "furniture_make_slot", kind: "message", T: () => FurnitureMakeSlot_1.FurnitureMakeSlot }
        ]);
    }
    create(value) {
        const message = { retcode: 0, makeId: 0 };
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
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 make_id */ 6:
                    message.makeId = reader.uint32();
                    break;
                case /* FurnitureMakeSlot furniture_make_slot */ 4:
                    message.furnitureMakeSlot = FurnitureMakeSlot_1.FurnitureMakeSlot.internalBinaryRead(reader, reader.uint32(), options, message.furnitureMakeSlot);
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
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 make_id = 6; */
        if (message.makeId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.makeId);
        /* FurnitureMakeSlot furniture_make_slot = 4; */
        if (message.furnitureMakeSlot)
            FurnitureMakeSlot_1.FurnitureMakeSlot.internalBinaryWrite(message.furnitureMakeSlot, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FurnitureMakeCancelRsp
 */
exports.FurnitureMakeCancelRsp = new FurnitureMakeCancelRsp$Type();
