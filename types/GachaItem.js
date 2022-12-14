"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaItem = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
const GachaTransferItem_1 = require("./GachaTransferItem");
// @generated message type with reflection information, may provide speed optimized methods
class GachaItem$Type extends runtime_5.MessageType {
    constructor() {
        super("GachaItem", [
            { no: 8, name: "is_flash_card", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "transfer_items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GachaTransferItem_1.GachaTransferItem },
            { no: 13, name: "is_gacha_item_new", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "gacha_item", kind: "message", T: () => ItemParam_1.ItemParam },
            { no: 10, name: "token_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { isFlashCard: false, transferItems: [], isGachaItemNew: false, tokenItemList: [] };
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
                case /* bool is_flash_card */ 8:
                    message.isFlashCard = reader.bool();
                    break;
                case /* repeated GachaTransferItem transfer_items */ 6:
                    message.transferItems.push(GachaTransferItem_1.GachaTransferItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool is_gacha_item_new */ 13:
                    message.isGachaItemNew = reader.bool();
                    break;
                case /* ItemParam gacha_item */ 5:
                    message.gachaItem = ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options, message.gachaItem);
                    break;
                case /* repeated ItemParam token_item_list */ 10:
                    message.tokenItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool is_flash_card = 8; */
        if (message.isFlashCard !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isFlashCard);
        /* repeated GachaTransferItem transfer_items = 6; */
        for (let i = 0; i < message.transferItems.length; i++)
            GachaTransferItem_1.GachaTransferItem.internalBinaryWrite(message.transferItems[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_gacha_item_new = 13; */
        if (message.isGachaItemNew !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.isGachaItemNew);
        /* ItemParam gacha_item = 5; */
        if (message.gachaItem)
            ItemParam_1.ItemParam.internalBinaryWrite(message.gachaItem, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam token_item_list = 10; */
        for (let i = 0; i < message.tokenItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.tokenItemList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaItem
 */
exports.GachaItem = new GachaItem$Type();
