"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNoGachaAvatarCardNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AddNoGachaAvatarCardTransferItem_1 = require("./AddNoGachaAvatarCardTransferItem");
// @generated message type with reflection information, may provide speed optimized methods
class AddNoGachaAvatarCardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AddNoGachaAvatarCardNotify", [
            { no: 9, name: "reason", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_MGAPHPOLKKE", kind: "scalar", jsonName: "Unk3300MGAPHPOLKKE", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_transfer_to_item", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "Unk3300_GPBINALMFDF", kind: "scalar", jsonName: "Unk3300GPBINALMFDF", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "transfer_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AddNoGachaAvatarCardTransferItem_1.AddNoGachaAvatarCardTransferItem }
        ]);
    }
    create(value) {
        const message = { reason: 0, unk3300MGAPHPOLKKE: 0, itemId: 0, avatarId: 0, isTransferToItem: false, unk3300GPBINALMFDF: 0, transferItemList: [] };
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
                case /* uint32 reason */ 9:
                    message.reason = reader.uint32();
                    break;
                case /* uint32 Unk3300_MGAPHPOLKKE = 7 [json_name = "Unk3300MGAPHPOLKKE"];*/ 7:
                    message.unk3300MGAPHPOLKKE = reader.uint32();
                    break;
                case /* uint32 item_id */ 2:
                    message.itemId = reader.uint32();
                    break;
                case /* uint32 avatar_id */ 4:
                    message.avatarId = reader.uint32();
                    break;
                case /* bool is_transfer_to_item */ 14:
                    message.isTransferToItem = reader.bool();
                    break;
                case /* uint32 Unk3300_GPBINALMFDF = 8 [json_name = "Unk3300GPBINALMFDF"];*/ 8:
                    message.unk3300GPBINALMFDF = reader.uint32();
                    break;
                case /* repeated AddNoGachaAvatarCardTransferItem transfer_item_list */ 6:
                    message.transferItemList.push(AddNoGachaAvatarCardTransferItem_1.AddNoGachaAvatarCardTransferItem.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 reason = 9; */
        if (message.reason !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.reason);
        /* uint32 Unk3300_MGAPHPOLKKE = 7 [json_name = "Unk3300MGAPHPOLKKE"]; */
        if (message.unk3300MGAPHPOLKKE !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300MGAPHPOLKKE);
        /* uint32 item_id = 2; */
        if (message.itemId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.itemId);
        /* uint32 avatar_id = 4; */
        if (message.avatarId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* bool is_transfer_to_item = 14; */
        if (message.isTransferToItem !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isTransferToItem);
        /* uint32 Unk3300_GPBINALMFDF = 8 [json_name = "Unk3300GPBINALMFDF"]; */
        if (message.unk3300GPBINALMFDF !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300GPBINALMFDF);
        /* repeated AddNoGachaAvatarCardTransferItem transfer_item_list = 6; */
        for (let i = 0; i < message.transferItemList.length; i++)
            AddNoGachaAvatarCardTransferItem_1.AddNoGachaAvatarCardTransferItem.internalBinaryWrite(message.transferItemList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AddNoGachaAvatarCardNotify
 */
exports.AddNoGachaAvatarCardNotify = new AddNoGachaAvatarCardNotify$Type();
