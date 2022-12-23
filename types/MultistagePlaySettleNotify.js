"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultistagePlaySettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InBattleIrodoriChessSettleInfo_1 = require("./InBattleIrodoriChessSettleInfo");
const InBattleChessSettleInfo_1 = require("./InBattleChessSettleInfo");
const InBattleMechanicusSettleInfo_1 = require("./InBattleMechanicusSettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class MultistagePlaySettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("MultistagePlaySettleNotify", [
            { no: 3, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 649, name: "mechanicus_settle_info", kind: "message", oneof: "detail", T: () => InBattleMechanicusSettleInfo_1.InBattleMechanicusSettleInfo },
            { no: 512, name: "chess_settle_info", kind: "message", oneof: "detail", T: () => InBattleChessSettleInfo_1.InBattleChessSettleInfo },
            { no: 520, name: "irodori_chess_settle_info", kind: "message", oneof: "detail", T: () => InBattleIrodoriChessSettleInfo_1.InBattleIrodoriChessSettleInfo }
        ]);
    }
    create(value) {
        const message = { groupId: 0, playIndex: 0, detail: { oneofKind: undefined } };
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
                case /* uint32 group_id */ 3:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 play_index */ 9:
                    message.playIndex = reader.uint32();
                    break;
                case /* InBattleMechanicusSettleInfo mechanicus_settle_info */ 649:
                    message.detail = {
                        oneofKind: "mechanicusSettleInfo",
                        mechanicusSettleInfo: InBattleMechanicusSettleInfo_1.InBattleMechanicusSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.mechanicusSettleInfo)
                    };
                    break;
                case /* InBattleChessSettleInfo chess_settle_info */ 512:
                    message.detail = {
                        oneofKind: "chessSettleInfo",
                        chessSettleInfo: InBattleChessSettleInfo_1.InBattleChessSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.chessSettleInfo)
                    };
                    break;
                case /* InBattleIrodoriChessSettleInfo irodori_chess_settle_info */ 520:
                    message.detail = {
                        oneofKind: "irodoriChessSettleInfo",
                        irodoriChessSettleInfo: InBattleIrodoriChessSettleInfo_1.InBattleIrodoriChessSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.irodoriChessSettleInfo)
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
        /* uint32 group_id = 3; */
        if (message.groupId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 play_index = 9; */
        if (message.playIndex !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* InBattleMechanicusSettleInfo mechanicus_settle_info = 649; */
        if (message.detail.oneofKind === "mechanicusSettleInfo")
            InBattleMechanicusSettleInfo_1.InBattleMechanicusSettleInfo.internalBinaryWrite(message.detail.mechanicusSettleInfo, writer.tag(649, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* InBattleChessSettleInfo chess_settle_info = 512; */
        if (message.detail.oneofKind === "chessSettleInfo")
            InBattleChessSettleInfo_1.InBattleChessSettleInfo.internalBinaryWrite(message.detail.chessSettleInfo, writer.tag(512, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* InBattleIrodoriChessSettleInfo irodori_chess_settle_info = 520; */
        if (message.detail.oneofKind === "irodoriChessSettleInfo")
            InBattleIrodoriChessSettleInfo_1.InBattleIrodoriChessSettleInfo.internalBinaryWrite(message.detail.irodoriChessSettleInfo, writer.tag(520, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MultistagePlaySettleNotify
 */
exports.MultistagePlaySettleNotify = new MultistagePlaySettleNotify$Type();
