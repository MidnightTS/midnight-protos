"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrickBreakerStageInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BrickBreakerStageType_1 = require("./BrickBreakerStageType");
const BrickBreakerPlayerBattleInfo_1 = require("./BrickBreakerPlayerBattleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BrickBreakerStageInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BrickBreakerStageInfo", [
            { no: 7, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "battle_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BrickBreakerPlayerBattleInfo_1.BrickBreakerPlayerBattleInfo },
            { no: 5, name: "stage_type", kind: "enum", T: () => ["BrickBreakerStageType", BrickBreakerStageType_1.BrickBreakerStageType, "BRICK_BREAKER_STAGE_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { levelId: 0, battleInfoList: [], stageType: 0 };
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
                case /* uint32 level_id */ 7:
                    message.levelId = reader.uint32();
                    break;
                case /* repeated BrickBreakerPlayerBattleInfo battle_info_list */ 3:
                    message.battleInfoList.push(BrickBreakerPlayerBattleInfo_1.BrickBreakerPlayerBattleInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* BrickBreakerStageType stage_type */ 5:
                    message.stageType = reader.int32();
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
        /* uint32 level_id = 7; */
        if (message.levelId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.levelId);
        /* repeated BrickBreakerPlayerBattleInfo battle_info_list = 3; */
        for (let i = 0; i < message.battleInfoList.length; i++)
            BrickBreakerPlayerBattleInfo_1.BrickBreakerPlayerBattleInfo.internalBinaryWrite(message.battleInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* BrickBreakerStageType stage_type = 5; */
        if (message.stageType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.stageType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BrickBreakerStageInfo
 */
exports.BrickBreakerStageInfo = new BrickBreakerStageInfo$Type();
