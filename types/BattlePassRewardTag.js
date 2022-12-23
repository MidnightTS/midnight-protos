"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassRewardTag = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BattlePassUnlockStatus_1 = require("./BattlePassUnlockStatus");
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassRewardTag$Type extends runtime_5.MessageType {
    constructor() {
        super("BattlePassRewardTag", [
            { no: 11, name: "unlock_status", kind: "enum", T: () => ["BattlePassUnlockStatus", BattlePassUnlockStatus_1.BattlePassUnlockStatus, "BATTLE_PASS_UNLOCK_STATUS_"] },
            { no: 4, name: "reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unlockStatus: 0, rewardId: 0, level: 0 };
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
                case /* BattlePassUnlockStatus unlock_status */ 11:
                    message.unlockStatus = reader.int32();
                    break;
                case /* uint32 reward_id */ 4:
                    message.rewardId = reader.uint32();
                    break;
                case /* uint32 level */ 1:
                    message.level = reader.uint32();
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
        /* BattlePassUnlockStatus unlock_status = 11; */
        if (message.unlockStatus !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.unlockStatus);
        /* uint32 reward_id = 4; */
        if (message.rewardId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.rewardId);
        /* uint32 level = 1; */
        if (message.level !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BattlePassRewardTag
 */
exports.BattlePassRewardTag = new BattlePassRewardTag$Type();
