"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralMatchInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MatchPlayerInfo_1 = require("./MatchPlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GeneralMatchInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GeneralMatchInfo", [
            { no: 8, name: "match_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "match_param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "player_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MatchPlayerInfo_1.MatchPlayerInfo }
        ]);
    }
    create(value) {
        const message = { matchId: 0, matchParam: 0, playerList: [] };
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
                case /* uint32 match_id */ 8:
                    message.matchId = reader.uint32();
                    break;
                case /* uint32 match_param */ 3:
                    message.matchParam = reader.uint32();
                    break;
                case /* repeated MatchPlayerInfo player_list */ 12:
                    message.playerList.push(MatchPlayerInfo_1.MatchPlayerInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 match_id = 8; */
        if (message.matchId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.matchId);
        /* uint32 match_param = 3; */
        if (message.matchParam !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.matchParam);
        /* repeated MatchPlayerInfo player_list = 12; */
        for (let i = 0; i < message.playerList.length; i++)
            MatchPlayerInfo_1.MatchPlayerInfo.internalBinaryWrite(message.playerList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GeneralMatchInfo
 */
exports.GeneralMatchInfo = new GeneralMatchInfo$Type();
