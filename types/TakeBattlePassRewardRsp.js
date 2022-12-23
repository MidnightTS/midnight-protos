"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeBattlePassRewardRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
const BattlePassRewardTakeOption_1 = require("./BattlePassRewardTakeOption");
// @generated message type with reflection information, may provide speed optimized methods
class TakeBattlePassRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("TakeBattlePassRewardRsp", [
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "take_option_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BattlePassRewardTakeOption_1.BattlePassRewardTakeOption },
            { no: 4, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { retcode: 0, takeOptionList: [], itemList: [] };
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
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* repeated BattlePassRewardTakeOption take_option_list */ 7:
                    message.takeOptionList.push(BattlePassRewardTakeOption_1.BattlePassRewardTakeOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemParam item_list */ 4:
                    message.itemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated BattlePassRewardTakeOption take_option_list = 7; */
        for (let i = 0; i < message.takeOptionList.length; i++)
            BattlePassRewardTakeOption_1.BattlePassRewardTakeOption.internalBinaryWrite(message.takeOptionList[i], writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam item_list = 4; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TakeBattlePassRewardRsp
 */
exports.TakeBattlePassRewardRsp = new TakeBattlePassRewardRsp$Type();
