"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOnlinePlayerInfoReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetOnlinePlayerInfoReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GetOnlinePlayerInfoReq", [
            { no: 8, name: "is_online_id", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "target_uid", kind: "scalar", oneof: "playerId", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "online_id", kind: "scalar", oneof: "playerId", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "psn_id", kind: "scalar", oneof: "playerId", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { isOnlineId: false, playerId: { oneofKind: undefined } };
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
                case /* bool is_online_id */ 8:
                    message.isOnlineId = reader.bool();
                    break;
                case /* uint32 target_uid */ 1:
                    message.playerId = {
                        oneofKind: "targetUid",
                        targetUid: reader.uint32()
                    };
                    break;
                case /* string online_id */ 7:
                    message.playerId = {
                        oneofKind: "onlineId",
                        onlineId: reader.string()
                    };
                    break;
                case /* string psn_id */ 4:
                    message.playerId = {
                        oneofKind: "psnId",
                        psnId: reader.string()
                    };
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
        /* bool is_online_id = 8; */
        if (message.isOnlineId !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isOnlineId);
        /* uint32 target_uid = 1; */
        if (message.playerId.oneofKind === "targetUid")
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.playerId.targetUid);
        /* string online_id = 7; */
        if (message.playerId.oneofKind === "onlineId")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.playerId.onlineId);
        /* string psn_id = 4; */
        if (message.playerId.oneofKind === "psnId")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.playerId.psnId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetOnlinePlayerInfoReq
 */
exports.GetOnlinePlayerInfoReq = new GetOnlinePlayerInfoReq$Type();
