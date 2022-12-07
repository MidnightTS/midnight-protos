"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarDieAnimationEndReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarDieAnimationEndReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarDieAnimationEndReq", [
            { no: 13, name: "die_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 14, name: "reborn_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 9, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { dieGuid: 0n, skillId: 0 };
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
                case /* uint64 die_guid */ 13:
                    message.dieGuid = reader.uint64().toBigInt();
                    break;
                case /* Vector reborn_pos */ 14:
                    message.rebornPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rebornPos);
                    break;
                case /* uint32 skill_id */ 9:
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
        /* uint64 die_guid = 13; */
        if (message.dieGuid !== 0n)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.dieGuid);
        /* Vector reborn_pos = 14; */
        if (message.rebornPos)
            Vector_1.Vector.internalBinaryWrite(message.rebornPos, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 skill_id = 9; */
        if (message.skillId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarDieAnimationEndReq
 */
exports.AvatarDieAnimationEndReq = new AvatarDieAnimationEndReq$Type();
