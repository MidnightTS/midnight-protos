"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerLevelEndNotify = exports.TowerLevelEndNotify_ContinueStateType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
/**
 * @generated from protobuf enum TowerLevelEndNotify.ContinueStateType
 */
var TowerLevelEndNotify_ContinueStateType;
(function (TowerLevelEndNotify_ContinueStateType) {
    /**
     * @generated from protobuf enum value: CONTINUE_STATE_TYPE_CAN_NOT_CONTINUE = 0;
     */
    TowerLevelEndNotify_ContinueStateType[TowerLevelEndNotify_ContinueStateType["CAN_NOT_CONTINUE"] = 0] = "CAN_NOT_CONTINUE";
    /**
     * @generated from protobuf enum value: CONTINUE_STATE_TYPE_CAN_ENTER_NEXT_LEVEL = 1;
     */
    TowerLevelEndNotify_ContinueStateType[TowerLevelEndNotify_ContinueStateType["CAN_ENTER_NEXT_LEVEL"] = 1] = "CAN_ENTER_NEXT_LEVEL";
    /**
     * @generated from protobuf enum value: CONTINUE_STATE_TYPE_CAN_ENTER_NEXT_FLOOR = 2;
     */
    TowerLevelEndNotify_ContinueStateType[TowerLevelEndNotify_ContinueStateType["CAN_ENTER_NEXT_FLOOR"] = 2] = "CAN_ENTER_NEXT_FLOOR";
})(TowerLevelEndNotify_ContinueStateType = exports.TowerLevelEndNotify_ContinueStateType || (exports.TowerLevelEndNotify_ContinueStateType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class TowerLevelEndNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("TowerLevelEndNotify", [
            { no: 2, name: "Unk3300_BOPIBKGAMID", kind: "scalar", jsonName: "Unk3300BOPIBKGAMID", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "finished_star_cond_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_AHBGPMBHPMO", kind: "scalar", jsonName: "Unk3300AHBGPMBHPMO", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "reward_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { unk3300BOPIBKGAMID: 0, finishedStarCondList: [], unk3300AHBGPMBHPMO: 0, isSuccess: false, rewardItemList: [] };
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
                case /* uint32 Unk3300_BOPIBKGAMID = 2 [json_name = "Unk3300BOPIBKGAMID"];*/ 2:
                    message.unk3300BOPIBKGAMID = reader.uint32();
                    break;
                case /* repeated uint32 finished_star_cond_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedStarCondList.push(reader.uint32());
                    else
                        message.finishedStarCondList.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_AHBGPMBHPMO = 4 [json_name = "Unk3300AHBGPMBHPMO"];*/ 4:
                    message.unk3300AHBGPMBHPMO = reader.uint32();
                    break;
                case /* bool is_success */ 15:
                    message.isSuccess = reader.bool();
                    break;
                case /* repeated ItemParam reward_item_list */ 10:
                    message.rewardItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 Unk3300_BOPIBKGAMID = 2 [json_name = "Unk3300BOPIBKGAMID"]; */
        if (message.unk3300BOPIBKGAMID !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.unk3300BOPIBKGAMID);
        /* repeated uint32 finished_star_cond_list = 6; */
        if (message.finishedStarCondList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedStarCondList.length; i++)
                writer.uint32(message.finishedStarCondList[i]);
            writer.join();
        }
        /* uint32 Unk3300_AHBGPMBHPMO = 4 [json_name = "Unk3300AHBGPMBHPMO"]; */
        if (message.unk3300AHBGPMBHPMO !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.unk3300AHBGPMBHPMO);
        /* bool is_success = 15; */
        if (message.isSuccess !== false)
            writer.tag(15, runtime_2.WireType.Varint).bool(message.isSuccess);
        /* repeated ItemParam reward_item_list = 10; */
        for (let i = 0; i < message.rewardItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.rewardItemList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerLevelEndNotify
 */
exports.TowerLevelEndNotify = new TowerLevelEndNotify$Type();
