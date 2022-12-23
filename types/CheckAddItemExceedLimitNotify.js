"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAddItemExceedLimitNotify = exports.CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType
 */
var CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType;
(function (CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType) {
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_TYPE_DEFAULT = 0;
     */
    CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType[CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType["DEFAULT"] = 0] = "DEFAULT";
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_TYPE_TEXT = 1;
     */
    CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType[CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType["TEXT"] = 1] = "TEXT";
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_TYPE_DIALOG = 2;
     */
    CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType[CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType["DIALOG"] = 2] = "DIALOG";
    /**
     * @generated from protobuf enum value: ITEM_EXCEED_LIMIT_MSG_TYPE_DIALOG_NONBLOCK = 3;
     */
    CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType[CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType["DIALOG_NONBLOCK"] = 3] = "DIALOG_NONBLOCK";
})(CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType = exports.CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType || (exports.CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class CheckAddItemExceedLimitNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CheckAddItemExceedLimitNotify", [
            { no: 4, name: "exceeded_item_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "exceeded_item_type_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "reason", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_drop", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "msg_type", kind: "enum", T: () => ["CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType", CheckAddItemExceedLimitNotify_ItemExceedLimitMsgType, "ITEM_EXCEED_LIMIT_MSG_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { exceededItemList: [], exceededItemTypeList: [], reason: 0, isDrop: false, msgType: 0 };
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
                case /* repeated uint32 exceeded_item_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exceededItemList.push(reader.uint32());
                    else
                        message.exceededItemList.push(reader.uint32());
                    break;
                case /* repeated uint32 exceeded_item_type_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exceededItemTypeList.push(reader.uint32());
                    else
                        message.exceededItemTypeList.push(reader.uint32());
                    break;
                case /* uint32 reason */ 9:
                    message.reason = reader.uint32();
                    break;
                case /* bool is_drop */ 14:
                    message.isDrop = reader.bool();
                    break;
                case /* CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType msg_type */ 6:
                    message.msgType = reader.int32();
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
        /* repeated uint32 exceeded_item_list = 4; */
        if (message.exceededItemList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exceededItemList.length; i++)
                writer.uint32(message.exceededItemList[i]);
            writer.join();
        }
        /* repeated uint32 exceeded_item_type_list = 11; */
        if (message.exceededItemTypeList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exceededItemTypeList.length; i++)
                writer.uint32(message.exceededItemTypeList[i]);
            writer.join();
        }
        /* uint32 reason = 9; */
        if (message.reason !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.reason);
        /* bool is_drop = 14; */
        if (message.isDrop !== false)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isDrop);
        /* CheckAddItemExceedLimitNotify.ItemExceedLimitMsgType msg_type = 6; */
        if (message.msgType !== 0)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.msgType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CheckAddItemExceedLimitNotify
 */
exports.CheckAddItemExceedLimitNotify = new CheckAddItemExceedLimitNotify$Type();
