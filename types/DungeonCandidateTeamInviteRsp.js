"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonCandidateTeamInviteRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class DungeonCandidateTeamInviteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("DungeonCandidateTeamInviteRsp", [
            { no: 11, name: "invalid_player_uids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { invalidPlayerUids: [], retcode: 0 };
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
                case /* repeated uint32 invalid_player_uids */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.invalidPlayerUids.push(reader.uint32());
                    else
                        message.invalidPlayerUids.push(reader.uint32());
                    break;
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 invalid_player_uids = 11; */
        if (message.invalidPlayerUids.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.invalidPlayerUids.length; i++)
                writer.uint32(message.invalidPlayerUids[i]);
            writer.join();
        }
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonCandidateTeamInviteRsp
 */
exports.DungeonCandidateTeamInviteRsp = new DungeonCandidateTeamInviteRsp$Type();
