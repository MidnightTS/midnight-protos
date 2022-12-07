"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalloonSettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BalloonSettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BalloonSettleInfo", [
            { no: 8, name: "player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo },
            { no: 13, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "final_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "max_combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "shoot_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, finalScore: 0, maxCombo: 0, shootCount: 0 };
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
                case /* OnlinePlayerInfo player_info */ 8:
                    message.playerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* uint32 uid */ 13:
                    message.uid = reader.uint32();
                    break;
                case /* uint32 final_score */ 2:
                    message.finalScore = reader.uint32();
                    break;
                case /* uint32 max_combo */ 7:
                    message.maxCombo = reader.uint32();
                    break;
                case /* uint32 shoot_count */ 14:
                    message.shootCount = reader.uint32();
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
        /* OnlinePlayerInfo player_info = 8; */
        if (message.playerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 uid = 13; */
        if (message.uid !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.uid);
        /* uint32 final_score = 2; */
        if (message.finalScore !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.finalScore);
        /* uint32 max_combo = 7; */
        if (message.maxCombo !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.maxCombo);
        /* uint32 shoot_count = 14; */
        if (message.shootCount !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.shootCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BalloonSettleInfo
 */
exports.BalloonSettleInfo = new BalloonSettleInfo$Type();
