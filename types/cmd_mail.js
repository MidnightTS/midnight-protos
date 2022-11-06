"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMailResultNotify = exports.GetAllMailNotify = exports.ChangeMailStarNotify = exports.GetAllMailRsp = exports.GetAllMailReq = exports.ClientNewMailNotify = exports.GetAuthkeyRsp = exports.GetAuthkeyReq = exports.DelMailRsp = exports.DelMailReq = exports.GetMailItemRsp = exports.GetMailItemReq = exports.ReadMailNotify = exports.MailChangeNotify = exports.AuthkeySignType = exports.GetAllMailResultNotify_CmdId = exports.GetAllMailNotify_CmdId = exports.ChangeMailStarNotify_CmdId = exports.GetAllMailRsp_CmdId = exports.GetAllMailReq_CmdId = exports.ClientNewMailNotify_CmdId = exports.GetAuthkeyRsp_CmdId = exports.GetAuthkeyReq_CmdId = exports.DelMailRsp_CmdId = exports.DelMailReq_CmdId = exports.GetMailItemRsp_CmdId = exports.GetMailItemReq_CmdId = exports.ReadMailNotify_CmdId = exports.MailChangeNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.MailChangeNotify.CmdId
 */
var MailChangeNotify_CmdId;
(function (MailChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MailChangeNotify_CmdId[MailChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1498;
     */
    MailChangeNotify_CmdId[MailChangeNotify_CmdId["CMD_ID"] = 1498] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MailChangeNotify_CmdId[MailChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MailChangeNotify_CmdId[MailChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MailChangeNotify_CmdId = exports.MailChangeNotify_CmdId || (exports.MailChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ReadMailNotify.CmdId
 */
var ReadMailNotify_CmdId;
(function (ReadMailNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadMailNotify_CmdId[ReadMailNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1412;
     */
    ReadMailNotify_CmdId[ReadMailNotify_CmdId["CMD_ID"] = 1412] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ReadMailNotify_CmdId[ReadMailNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadMailNotify_CmdId[ReadMailNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ReadMailNotify_CmdId[ReadMailNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ReadMailNotify_CmdId = exports.ReadMailNotify_CmdId || (exports.ReadMailNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetMailItemReq.CmdId
 */
var GetMailItemReq_CmdId;
(function (GetMailItemReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMailItemReq_CmdId[GetMailItemReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1435;
     */
    GetMailItemReq_CmdId[GetMailItemReq_CmdId["CMD_ID"] = 1435] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMailItemReq_CmdId[GetMailItemReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMailItemReq_CmdId[GetMailItemReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMailItemReq_CmdId[GetMailItemReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetMailItemReq_CmdId = exports.GetMailItemReq_CmdId || (exports.GetMailItemReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetMailItemRsp.CmdId
 */
var GetMailItemRsp_CmdId;
(function (GetMailItemRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMailItemRsp_CmdId[GetMailItemRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1407;
     */
    GetMailItemRsp_CmdId[GetMailItemRsp_CmdId["CMD_ID"] = 1407] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetMailItemRsp_CmdId[GetMailItemRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetMailItemRsp_CmdId[GetMailItemRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetMailItemRsp_CmdId = exports.GetMailItemRsp_CmdId || (exports.GetMailItemRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DelMailReq.CmdId
 */
var DelMailReq_CmdId;
(function (DelMailReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelMailReq_CmdId[DelMailReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1421;
     */
    DelMailReq_CmdId[DelMailReq_CmdId["CMD_ID"] = 1421] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelMailReq_CmdId[DelMailReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DelMailReq_CmdId[DelMailReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DelMailReq_CmdId[DelMailReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(DelMailReq_CmdId = exports.DelMailReq_CmdId || (exports.DelMailReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DelMailRsp.CmdId
 */
var DelMailRsp_CmdId;
(function (DelMailRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelMailRsp_CmdId[DelMailRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1403;
     */
    DelMailRsp_CmdId[DelMailRsp_CmdId["CMD_ID"] = 1403] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DelMailRsp_CmdId[DelMailRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DelMailRsp_CmdId[DelMailRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DelMailRsp_CmdId = exports.DelMailRsp_CmdId || (exports.DelMailRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAuthkeyReq.CmdId
 */
var GetAuthkeyReq_CmdId;
(function (GetAuthkeyReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAuthkeyReq_CmdId[GetAuthkeyReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1490;
     */
    GetAuthkeyReq_CmdId[GetAuthkeyReq_CmdId["CMD_ID"] = 1490] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAuthkeyReq_CmdId[GetAuthkeyReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAuthkeyReq_CmdId[GetAuthkeyReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAuthkeyReq_CmdId[GetAuthkeyReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetAuthkeyReq_CmdId = exports.GetAuthkeyReq_CmdId || (exports.GetAuthkeyReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAuthkeyRsp.CmdId
 */
var GetAuthkeyRsp_CmdId;
(function (GetAuthkeyRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAuthkeyRsp_CmdId[GetAuthkeyRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1473;
     */
    GetAuthkeyRsp_CmdId[GetAuthkeyRsp_CmdId["CMD_ID"] = 1473] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAuthkeyRsp_CmdId[GetAuthkeyRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAuthkeyRsp_CmdId[GetAuthkeyRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetAuthkeyRsp_CmdId = exports.GetAuthkeyRsp_CmdId || (exports.GetAuthkeyRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ClientNewMailNotify.CmdId
 */
var ClientNewMailNotify_CmdId;
(function (ClientNewMailNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientNewMailNotify_CmdId[ClientNewMailNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1499;
     */
    ClientNewMailNotify_CmdId[ClientNewMailNotify_CmdId["CMD_ID"] = 1499] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ClientNewMailNotify_CmdId[ClientNewMailNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ClientNewMailNotify_CmdId[ClientNewMailNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(ClientNewMailNotify_CmdId = exports.ClientNewMailNotify_CmdId || (exports.ClientNewMailNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllMailReq.CmdId
 */
var GetAllMailReq_CmdId;
(function (GetAllMailReq_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllMailReq_CmdId[GetAllMailReq_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1431;
     */
    GetAllMailReq_CmdId[GetAllMailReq_CmdId["CMD_ID"] = 1431] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllMailReq_CmdId[GetAllMailReq_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllMailReq_CmdId[GetAllMailReq_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllMailReq_CmdId[GetAllMailReq_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetAllMailReq_CmdId = exports.GetAllMailReq_CmdId || (exports.GetAllMailReq_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllMailRsp.CmdId
 */
var GetAllMailRsp_CmdId;
(function (GetAllMailRsp_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllMailRsp_CmdId[GetAllMailRsp_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1475;
     */
    GetAllMailRsp_CmdId[GetAllMailRsp_CmdId["CMD_ID"] = 1475] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllMailRsp_CmdId[GetAllMailRsp_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllMailRsp_CmdId[GetAllMailRsp_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetAllMailRsp_CmdId = exports.GetAllMailRsp_CmdId || (exports.GetAllMailRsp_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeMailStarNotify.CmdId
 */
var ChangeMailStarNotify_CmdId;
(function (ChangeMailStarNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeMailStarNotify_CmdId[ChangeMailStarNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1448;
     */
    ChangeMailStarNotify_CmdId[ChangeMailStarNotify_CmdId["CMD_ID"] = 1448] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ChangeMailStarNotify_CmdId[ChangeMailStarNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeMailStarNotify_CmdId[ChangeMailStarNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ChangeMailStarNotify_CmdId[ChangeMailStarNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(ChangeMailStarNotify_CmdId = exports.ChangeMailStarNotify_CmdId || (exports.ChangeMailStarNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllMailNotify.CmdId
 */
var GetAllMailNotify_CmdId;
(function (GetAllMailNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllMailNotify_CmdId[GetAllMailNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1497;
     */
    GetAllMailNotify_CmdId[GetAllMailNotify_CmdId["CMD_ID"] = 1497] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllMailNotify_CmdId[GetAllMailNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllMailNotify_CmdId[GetAllMailNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllMailNotify_CmdId[GetAllMailNotify_CmdId["IS_ALLOW_CLIENT"] = 1] = "IS_ALLOW_CLIENT";
})(GetAllMailNotify_CmdId = exports.GetAllMailNotify_CmdId || (exports.GetAllMailNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GetAllMailResultNotify.CmdId
 */
var GetAllMailResultNotify_CmdId;
(function (GetAllMailResultNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllMailResultNotify_CmdId[GetAllMailResultNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1481;
     */
    GetAllMailResultNotify_CmdId[GetAllMailResultNotify_CmdId["CMD_ID"] = 1481] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GetAllMailResultNotify_CmdId[GetAllMailResultNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GetAllMailResultNotify_CmdId[GetAllMailResultNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GetAllMailResultNotify_CmdId = exports.GetAllMailResultNotify_CmdId || (exports.GetAllMailResultNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AuthkeySignType
 */
var AuthkeySignType;
(function (AuthkeySignType) {
    /**
     * @generated from protobuf enum value: AUTHKEY_SIGN_TYPE_NONE = 0;
     */
    AuthkeySignType[AuthkeySignType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: AUTHKEY_SIGN_TYPE_DEFAULT = 1;
     */
    AuthkeySignType[AuthkeySignType["DEFAULT"] = 1] = "DEFAULT";
    /**
     * @generated from protobuf enum value: AUTHKEY_SIGN_TYPE_RSA = 2;
     */
    AuthkeySignType[AuthkeySignType["RSA"] = 2] = "RSA";
})(AuthkeySignType = exports.AuthkeySignType || (exports.AuthkeySignType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class MailChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MailChangeNotify", [
            { no: 14, name: "mail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.MailData },
            { no: 8, name: "del_mail_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { mailList: [], delMailIdList: [] };
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
                case /* repeated com.midnights.game.MailData mail_list */ 14:
                    message.mailList.push(define_2.MailData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 del_mail_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.delMailIdList.push(reader.uint32());
                    else
                        message.delMailIdList.push(reader.uint32());
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
        /* repeated com.midnights.game.MailData mail_list = 14; */
        for (let i = 0; i < message.mailList.length; i++)
            define_2.MailData.internalBinaryWrite(message.mailList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 del_mail_id_list = 8; */
        if (message.delMailIdList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.delMailIdList.length; i++)
                writer.uint32(message.delMailIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MailChangeNotify
 */
exports.MailChangeNotify = new MailChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadMailNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ReadMailNotify", [
            { no: 2, name: "mail_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { mailIdList: [] };
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
                case /* repeated uint32 mail_id_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.mailIdList.push(reader.uint32());
                    else
                        message.mailIdList.push(reader.uint32());
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
        /* repeated uint32 mail_id_list = 2; */
        if (message.mailIdList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.mailIdList.length; i++)
                writer.uint32(message.mailIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ReadMailNotify
 */
exports.ReadMailNotify = new ReadMailNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMailItemReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetMailItemReq", [
            { no: 6, name: "mail_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { mailIdList: [] };
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
                case /* repeated uint32 mail_id_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.mailIdList.push(reader.uint32());
                    else
                        message.mailIdList.push(reader.uint32());
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
        /* repeated uint32 mail_id_list = 6; */
        if (message.mailIdList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.mailIdList.length; i++)
                writer.uint32(message.mailIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetMailItemReq
 */
exports.GetMailItemReq = new GetMailItemReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMailItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetMailItemRsp", [
            { no: 7, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "mail_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_1.EquipParam }
        ]);
    }
    create(value) {
        const message = { mailIdList: [], itemList: [] };
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
                case /* optional int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 mail_id_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.mailIdList.push(reader.uint32());
                    else
                        message.mailIdList.push(reader.uint32());
                    break;
                case /* repeated com.midnights.game.EquipParam item_list */ 2:
                    message.itemList.push(define_1.EquipParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional int32 retcode = 7; */
        if (message.retcode !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 mail_id_list = 3; */
        if (message.mailIdList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.mailIdList.length; i++)
                writer.uint32(message.mailIdList[i]);
            writer.join();
        }
        /* repeated com.midnights.game.EquipParam item_list = 2; */
        for (let i = 0; i < message.itemList.length; i++)
            define_1.EquipParam.internalBinaryWrite(message.itemList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetMailItemRsp
 */
exports.GetMailItemRsp = new GetMailItemRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DelMailReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DelMailReq", [
            { no: 12, name: "mail_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { mailIdList: [] };
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
                case /* repeated uint32 mail_id_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.mailIdList.push(reader.uint32());
                    else
                        message.mailIdList.push(reader.uint32());
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
        /* repeated uint32 mail_id_list = 12; */
        if (message.mailIdList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.mailIdList.length; i++)
                writer.uint32(message.mailIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DelMailReq
 */
exports.DelMailReq = new DelMailReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DelMailRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DelMailRsp", [
            { no: 11, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "mail_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { mailIdList: [] };
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
                case /* optional int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 mail_id_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.mailIdList.push(reader.uint32());
                    else
                        message.mailIdList.push(reader.uint32());
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
        /* optional int32 retcode = 11; */
        if (message.retcode !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 mail_id_list = 5; */
        if (message.mailIdList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.mailIdList.length; i++)
                writer.uint32(message.mailIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DelMailRsp
 */
exports.DelMailRsp = new DelMailRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAuthkeyReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAuthkeyReq", [
            { no: 14, name: "auth_appid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "sign_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "authkey_ver", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional string auth_appid */ 14:
                    message.authAppid = reader.string();
                    break;
                case /* optional uint32 sign_type */ 7:
                    message.signType = reader.uint32();
                    break;
                case /* optional uint32 authkey_ver */ 13:
                    message.authkeyVer = reader.uint32();
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
        /* optional string auth_appid = 14; */
        if (message.authAppid !== undefined)
            writer.tag(14, runtime_2.WireType.LengthDelimited).string(message.authAppid);
        /* optional uint32 sign_type = 7; */
        if (message.signType !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.signType);
        /* optional uint32 authkey_ver = 13; */
        if (message.authkeyVer !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.authkeyVer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAuthkeyReq
 */
exports.GetAuthkeyReq = new GetAuthkeyReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAuthkeyRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAuthkeyRsp", [
            { no: 4, name: "auth_appid", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "sign_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "authkey_ver", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "game_biz", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "authkey", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional string auth_appid */ 4:
                    message.authAppid = reader.string();
                    break;
                case /* optional uint32 sign_type */ 15:
                    message.signType = reader.uint32();
                    break;
                case /* optional int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* optional uint32 authkey_ver */ 9:
                    message.authkeyVer = reader.uint32();
                    break;
                case /* optional string game_biz */ 11:
                    message.gameBiz = reader.string();
                    break;
                case /* optional string authkey */ 3:
                    message.authkey = reader.string();
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
        /* optional string auth_appid = 4; */
        if (message.authAppid !== undefined)
            writer.tag(4, runtime_2.WireType.LengthDelimited).string(message.authAppid);
        /* optional uint32 sign_type = 15; */
        if (message.signType !== undefined)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.signType);
        /* optional int32 retcode = 6; */
        if (message.retcode !== undefined)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        /* optional uint32 authkey_ver = 9; */
        if (message.authkeyVer !== undefined)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.authkeyVer);
        /* optional string game_biz = 11; */
        if (message.gameBiz !== undefined)
            writer.tag(11, runtime_2.WireType.LengthDelimited).string(message.gameBiz);
        /* optional string authkey = 3; */
        if (message.authkey !== undefined)
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.authkey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAuthkeyRsp
 */
exports.GetAuthkeyRsp = new GetAuthkeyRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClientNewMailNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ClientNewMailNotify", [
            { no: 7, name: "not_read_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "not_got_attachment_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 not_read_num */ 7:
                    message.notReadNum = reader.uint32();
                    break;
                case /* optional uint32 not_got_attachment_num */ 2:
                    message.notGotAttachmentNum = reader.uint32();
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
        /* optional uint32 not_read_num = 7; */
        if (message.notReadNum !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.notReadNum);
        /* optional uint32 not_got_attachment_num = 2; */
        if (message.notGotAttachmentNum !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.notGotAttachmentNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ClientNewMailNotify
 */
exports.ClientNewMailNotify = new ClientNewMailNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllMailReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllMailReq", [
            { no: 7, name: "is_collected", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional bool is_collected */ 7:
                    message.isCollected = reader.bool();
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
        /* optional bool is_collected = 7; */
        if (message.isCollected !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isCollected);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAllMailReq
 */
exports.GetAllMailReq = new GetAllMailReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllMailRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllMailRsp", [
            { no: 8, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "mail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.MailData },
            { no: 1, name: "is_collected", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "is_truncated", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { mailList: [] };
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
                case /* optional int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* repeated com.midnights.game.MailData mail_list */ 14:
                    message.mailList.push(define_2.MailData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional bool is_collected */ 1:
                    message.isCollected = reader.bool();
                    break;
                case /* optional bool is_truncated */ 2:
                    message.isTruncated = reader.bool();
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
        /* optional int32 retcode = 8; */
        if (message.retcode !== undefined)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated com.midnights.game.MailData mail_list = 14; */
        for (let i = 0; i < message.mailList.length; i++)
            define_2.MailData.internalBinaryWrite(message.mailList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_collected = 1; */
        if (message.isCollected !== undefined)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isCollected);
        /* optional bool is_truncated = 2; */
        if (message.isTruncated !== undefined)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isTruncated);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAllMailRsp
 */
exports.GetAllMailRsp = new GetAllMailRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ChangeMailStarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ChangeMailStarNotify", [
            { no: 14, name: "is_star", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "mail_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { mailIdList: [] };
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
                case /* optional bool is_star */ 14:
                    message.isStar = reader.bool();
                    break;
                case /* repeated uint32 mail_id_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.mailIdList.push(reader.uint32());
                    else
                        message.mailIdList.push(reader.uint32());
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
        /* optional bool is_star = 14; */
        if (message.isStar !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isStar);
        /* repeated uint32 mail_id_list = 2; */
        if (message.mailIdList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.mailIdList.length; i++)
                writer.uint32(message.mailIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ChangeMailStarNotify
 */
exports.ChangeMailStarNotify = new ChangeMailStarNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllMailNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllMailNotify", [
            { no: 13, name: "is_collected", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional bool is_collected */ 13:
                    message.isCollected = reader.bool();
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
        /* optional bool is_collected = 13; */
        if (message.isCollected !== undefined)
            writer.tag(13, runtime_2.WireType.Varint).bool(message.isCollected);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAllMailNotify
 */
exports.GetAllMailNotify = new GetAllMailNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllMailResultNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GetAllMailResultNotify", [
            { no: 9, name: "transaction", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "mail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_2.MailData },
            { no: 11, name: "page_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "total_page_count", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_collected", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "retcode", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { mailList: [] };
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
                case /* optional string transaction */ 9:
                    message.transaction = reader.string();
                    break;
                case /* repeated com.midnights.game.MailData mail_list */ 5:
                    message.mailList.push(define_2.MailData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 page_index */ 11:
                    message.pageIndex = reader.uint32();
                    break;
                case /* optional uint32 total_page_count */ 4:
                    message.totalPageCount = reader.uint32();
                    break;
                case /* optional bool is_collected */ 7:
                    message.isCollected = reader.bool();
                    break;
                case /* optional int32 retcode */ 14:
                    message.retcode = reader.int32();
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
        /* optional string transaction = 9; */
        if (message.transaction !== undefined)
            writer.tag(9, runtime_2.WireType.LengthDelimited).string(message.transaction);
        /* repeated com.midnights.game.MailData mail_list = 5; */
        for (let i = 0; i < message.mailList.length; i++)
            define_2.MailData.internalBinaryWrite(message.mailList[i], writer.tag(5, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 page_index = 11; */
        if (message.pageIndex !== undefined)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.pageIndex);
        /* optional uint32 total_page_count = 4; */
        if (message.totalPageCount !== undefined)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.totalPageCount);
        /* optional bool is_collected = 7; */
        if (message.isCollected !== undefined)
            writer.tag(7, runtime_2.WireType.Varint).bool(message.isCollected);
        /* optional int32 retcode = 14; */
        if (message.retcode !== undefined)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GetAllMailResultNotify
 */
exports.GetAllMailResultNotify = new GetAllMailResultNotify$Type();
