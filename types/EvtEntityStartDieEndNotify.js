"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtEntityStartDieEndNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class EvtEntityStartDieEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtEntityStartDieEndNotify", [
            { no: 9, name: "immediately", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 4, name: "die_state_flag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { immediately: false, forwardType: 0, dieStateFlag: 0, entityId: 0 };
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
                case /* bool immediately */ 9:
                    message.immediately = reader.bool();
                    break;
                case /* ForwardType forward_type */ 2:
                    message.forwardType = reader.int32();
                    break;
                case /* uint32 die_state_flag */ 4:
                    message.dieStateFlag = reader.uint32();
                    break;
                case /* uint32 entity_id */ 6:
                    message.entityId = reader.uint32();
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
        /* bool immediately = 9; */
        if (message.immediately !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.immediately);
        /* ForwardType forward_type = 2; */
        if (message.forwardType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.forwardType);
        /* uint32 die_state_flag = 4; */
        if (message.dieStateFlag !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.dieStateFlag);
        /* uint32 entity_id = 6; */
        if (message.entityId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtEntityStartDieEndNotify
 */
exports.EvtEntityStartDieEndNotify = new EvtEntityStartDieEndNotify$Type();
