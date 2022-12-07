"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerApplyEnterMpAfterMatchAgreedNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MatchType_1 = require("./MatchType");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerApplyEnterMpAfterMatchAgreedNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerApplyEnterMpAfterMatchAgreedNotify", [
            { no: 3, name: "matchserver_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "src_player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo },
            { no: 5, name: "match_type", kind: "enum", T: () => ["MatchType", MatchType_1.MatchType, "MATCH_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { matchserverId: 0, matchType: 0 };
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
                case /* uint32 matchserver_id */ 3:
                    message.matchserverId = reader.uint32();
                    break;
                case /* OnlinePlayerInfo src_player_info */ 7:
                    message.srcPlayerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.srcPlayerInfo);
                    break;
                case /* MatchType match_type */ 5:
                    message.matchType = reader.int32();
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
        /* uint32 matchserver_id = 3; */
        if (message.matchserverId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.matchserverId);
        /* OnlinePlayerInfo src_player_info = 7; */
        if (message.srcPlayerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.srcPlayerInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* MatchType match_type = 5; */
        if (message.matchType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.matchType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerApplyEnterMpAfterMatchAgreedNotify
 */
exports.PlayerApplyEnterMpAfterMatchAgreedNotify = new PlayerApplyEnterMpAfterMatchAgreedNotify$Type();
