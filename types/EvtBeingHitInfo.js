"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtBeingHitInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AttackResult_1 = require("./AttackResult");
// @generated message type with reflection information, may provide speed optimized methods
class EvtBeingHitInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtBeingHitInfo", [
            { no: 11, name: "frame_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "peer_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "attack_result", kind: "message", T: () => AttackResult_1.AttackResult }
        ]);
    }
    create(value) {
        const message = { frameNum: 0, peerId: 0 };
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
                case /* uint32 frame_num */ 11:
                    message.frameNum = reader.uint32();
                    break;
                case /* uint32 peer_id */ 2:
                    message.peerId = reader.uint32();
                    break;
                case /* AttackResult attack_result */ 6:
                    message.attackResult = AttackResult_1.AttackResult.internalBinaryRead(reader, reader.uint32(), options, message.attackResult);
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
        /* uint32 frame_num = 11; */
        if (message.frameNum !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.frameNum);
        /* uint32 peer_id = 2; */
        if (message.peerId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.peerId);
        /* AttackResult attack_result = 6; */
        if (message.attackResult)
            AttackResult_1.AttackResult.internalBinaryWrite(message.attackResult, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtBeingHitInfo
 */
exports.EvtBeingHitInfo = new EvtBeingHitInfo$Type();
