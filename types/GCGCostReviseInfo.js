"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGCostReviseInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGAttackCostInfo_1 = require("./GCGAttackCostInfo");
const GCGPlayCardCostInfo_1 = require("./GCGPlayCardCostInfo");
const GCGSelectOnStageCostInfo_1 = require("./GCGSelectOnStageCostInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGCostReviseInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGCostReviseInfo", [
            { no: 15, name: "can_use_hand_card_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "select_on_stage_cost_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGSelectOnStageCostInfo_1.GCGSelectOnStageCostInfo },
            { no: 5, name: "play_card_cost_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGPlayCardCostInfo_1.GCGPlayCardCostInfo },
            { no: 12, name: "attack_cost_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGAttackCostInfo_1.GCGAttackCostInfo },
            { no: 14, name: "is_can_attack", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { canUseHandCardIdList: [], selectOnStageCostList: [], playCardCostList: [], attackCostList: [], isCanAttack: false };
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
                case /* repeated uint32 can_use_hand_card_id_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.canUseHandCardIdList.push(reader.uint32());
                    else
                        message.canUseHandCardIdList.push(reader.uint32());
                    break;
                case /* repeated GCGSelectOnStageCostInfo select_on_stage_cost_list */ 13:
                    message.selectOnStageCostList.push(GCGSelectOnStageCostInfo_1.GCGSelectOnStageCostInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGPlayCardCostInfo play_card_cost_list */ 5:
                    message.playCardCostList.push(GCGPlayCardCostInfo_1.GCGPlayCardCostInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGAttackCostInfo attack_cost_list */ 12:
                    message.attackCostList.push(GCGAttackCostInfo_1.GCGAttackCostInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_can_attack */ 14:
                    message.isCanAttack = reader.bool();
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
        /* repeated uint32 can_use_hand_card_id_list = 15; */
        if (message.canUseHandCardIdList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.canUseHandCardIdList.length; i++)
                writer.uint32(message.canUseHandCardIdList[i]);
            writer.join();
        }
        /* repeated GCGSelectOnStageCostInfo select_on_stage_cost_list = 13; */
        for (let i = 0; i < message.selectOnStageCostList.length; i++)
            GCGSelectOnStageCostInfo_1.GCGSelectOnStageCostInfo.internalBinaryWrite(message.selectOnStageCostList[i], writer.tag(13, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGPlayCardCostInfo play_card_cost_list = 5; */
        for (let i = 0; i < message.playCardCostList.length; i++)
            GCGPlayCardCostInfo_1.GCGPlayCardCostInfo.internalBinaryWrite(message.playCardCostList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGAttackCostInfo attack_cost_list = 12; */
        for (let i = 0; i < message.attackCostList.length; i++)
            GCGAttackCostInfo_1.GCGAttackCostInfo.internalBinaryWrite(message.attackCostList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool is_can_attack = 14; */
        if (message.isCanAttack !== false)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isCanAttack);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGCostReviseInfo
 */
exports.GCGCostReviseInfo = new GCGCostReviseInfo$Type();
