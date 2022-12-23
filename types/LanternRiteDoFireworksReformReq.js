"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanternRiteDoFireworksReformReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteDoFireworksReformReq$Type extends runtime_5.MessageType {
    constructor() {
        super("LanternRiteDoFireworksReformReq", [
            { no: 15, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "factor_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, challengeId: 0, factorId: 0, skillId: 0 };
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
                case /* uint32 stage_id */ 15:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 challenge_id */ 13:
                    message.challengeId = reader.uint32();
                    break;
                case /* uint32 factor_id */ 9:
                    message.factorId = reader.uint32();
                    break;
                case /* uint32 skill_id */ 4:
                    message.skillId = reader.uint32();
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
        /* uint32 stage_id = 15; */
        if (message.stageId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.stageId);
        /* uint32 challenge_id = 13; */
        if (message.challengeId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.challengeId);
        /* uint32 factor_id = 9; */
        if (message.factorId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.factorId);
        /* uint32 skill_id = 4; */
        if (message.skillId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteDoFireworksReformReq
 */
exports.LanternRiteDoFireworksReformReq = new LanternRiteDoFireworksReformReq$Type();
