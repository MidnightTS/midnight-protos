"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAvatarLockChairReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarLockChairReq$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAvatarLockChairReq", [
            { no: 2, name: "position", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "chair_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { chairId: 0n };
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
                case /* Vector position */ 2:
                    message.position = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* uint64 chair_id */ 5:
                    message.chairId = reader.uint64().toBigInt();
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
        /* Vector position = 2; */
        if (message.position)
            Vector_1.Vector.internalBinaryWrite(message.position, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 chair_id = 5; */
        if (message.chairId !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.chairId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAvatarLockChairReq
 */
exports.EvtAvatarLockChairReq = new EvtAvatarLockChairReq$Type();
